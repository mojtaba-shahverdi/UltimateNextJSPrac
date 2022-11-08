import styled from '@emotion/styled'
import React from 'react'
import Input from '../Input/Input'

const Layout = styled.div`
  width: 100%;
`

const InputEmail = (props) => {
  return (
    <Layout>
      <Input type="email" {...props} />
    </Layout>
  )
}

export default InputEmail
