import React from 'react'
import styled from 'styled-components'

import Layout from '@/components/layout'

const Collapse = styled.div`
  width: 800px;
  margin: 0 auto 2rem auto;
  padding: 0.8rem;
  font-size: 0.85rem;
  background: #eaeaea;
  border-radius: 0.6rem;
`

const CollapseItem = styled.div`
  max-height: 0;
  transition: max-height 0.3s;
`

export default function FAQPage() {
  return (
    <Layout>
      <Collapse>
        <CollapseItem></CollapseItem>
      </Collapse>
    </Layout>
  )
}
