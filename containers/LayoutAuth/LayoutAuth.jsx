import styled from '@emotion/styled'
import React from 'react'
import { Hyperlink } from '../../components'

const Layout = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`
const Img = styled.img`
  width: 200px;
`

// eslint-disable-next-line react/prop-types
const LayoutAuth = ({ children }) => {
  return (
    <Layout>
      <div>
        <Hyperlink href="/">
          <Img src="logo.png" />
        </Hyperlink>
      </div>
      {children}
    </Layout>
  )
}

export default LayoutAuth
