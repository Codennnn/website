import React from 'react'
import Terser from 'terser'

import { COLORS } from './config/theme'

function setColorsByTheme() {
  const colors = '🌈'

  const colorMode = 'light'

  const root = document.documentElement

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`

    root.style.setProperty(cssVarName, colorByTheme[colorMode])
  })
}

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme).replace(
    "'🌈'",
    JSON.stringify(COLORS)
  )

  let calledFunction = `(${boundFn})()`

  calledFunction = Terser.minify(calledFunction).code

  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />)
}
