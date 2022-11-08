import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

const Layout = styled.div`
  display: flex;
  padding: ${(props) => props.theme.spaces[3]} 0;
`

// eslint-disable-next-line react/prop-types
const FormControl = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme()
  return <Layout>{children}</Layout>
}

export default FormControl
