import styled from '@emotion/styled'
import React from 'react'
import Input from '../Input/Input'

const Layout = styled.div`
  width: 100%;
`

// eslint-disable-next-line react/prop-types
const InputPassword = (props) => {
  return (
    <Layout>
      <Input type="password" {...props} />
    </Layout>
  )
}

export default InputPassword
