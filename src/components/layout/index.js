import React from 'react'
import styled from 'styled-components'

import { LAYOUT } from '~/config/theme'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

const AppLayout = styled.div`
  position: relative;
  right: 0;
`

const Main = styled.main`
  min-height: calc(100vh - ${LAYOUT.footerHeight});
`

export default function Layout({ children }) {
  return (
    <AppLayout>
      <AppHeader />

      <Main>{children}</Main>

      <AppFooter />
    </AppLayout>
  )
}
