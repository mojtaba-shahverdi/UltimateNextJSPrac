import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

const H3El = styled.h3`
  margin: 3rem 0 1.38rem;
  margin-top: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => props.theme.typography.h3.fontWeight};
  line-height: ${(props) => props.theme.typography.h3.lineHeight};
  font-size: ${(props) => props.theme.typography.h3.fontSize}em;
`

// eslint-disable-next-line react/prop-types
const H3 = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme()
  return <H3El>{children}</H3El>
}

export default H3
