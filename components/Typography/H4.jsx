import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

const H4El = styled.h4`
  margin: 3rem 0 1.38rem;
  margin-top: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => props.theme.typography.h4.fontWeight};
  line-height: ${(props) => props.theme.typography.h4.lineHeight};
  font-size: ${(props) => props.theme.typography.h4.fontSize}em;
`

// eslint-disable-next-line react/prop-types
const H4 = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme()
  return <H4El>{children}</H4El>
}

export default H4
