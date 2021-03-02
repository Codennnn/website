import React from 'react'
import styled from 'styled-components'

import Layout from '@/components/layout'

const LogItem = styled.div`
  width: 800px;
  margin: 0 auto 2rem auto;
  padding: 0.8rem;
  font-size: 0.85rem;
  background: #eaeaea;
  border-radius: 0.6rem;
`

export default function LogPage() {
  return (
    <Layout>
      <div style={{ paddingTop: '2rem' }}>
        <LogItem>
          更新日期：2021-02-22
          <br />
          更新版本：2.2.9
          <br />
          更新内容：1.
          改版了用户细查（行为记录）和用户连线（远程调试）两大功能模块 2.
          调整了埋点功能的排版布局
          <br />
          更新指引：1. 更新最新代码，重启服务即可。 2. 需更新探针代码。 【注意：
          此版本为过渡版本，老用户不建议更新】
          <br />
          更新日期：2021-02-22 01:20:49
        </LogItem>
        <LogItem>
          更新日期：2021-02-22
          <br />
          更新版本：2.2.9
          <br />
          更新内容：1.
          改版了用户细查（行为记录）和用户连线（远程调试）两大功能模块 2.
          调整了埋点功能的排版布局
          <br />
          更新指引：1. 更新最新代码，重启服务即可。 2. 需更新探针代码。 【注意：
          此版本为过渡版本，老用户不建议更新】
          <br />
          更新日期：2021-02-22 01:20:49
        </LogItem>
      </div>
    </Layout>
  )
}
