import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

const H1El = styled.h1`
  margin: 3rem 0 1.38rem;
  margin-top: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => props.theme.typography.h1.fontWeight};
  line-height: ${(props) => props.theme.typography.h1.lineHeight};
  font-size: ${(props) => props.theme.typography.h1.fontSize}em;
`

// eslint-disable-next-line react/prop-types
const H1 = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme()
  return <H1El>{children}</H1El>
}

export default H1
