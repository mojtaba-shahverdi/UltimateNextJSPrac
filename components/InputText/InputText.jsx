import styled from '@emotion/styled'
import React from 'react'
import Input from '../Input/Input'

const Layout = styled.div`
  width: 100%;
`

const InputText = (props) => {
  return (
    <Layout>
      <Input type="text" {...props} />
    </Layout>
  )
}

export default InputText
