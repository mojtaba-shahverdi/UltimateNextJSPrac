import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

const SmallEl = styled.p`
  margin: 3rem 0 1.38rem;
  margin-top: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => props.theme.typography.small.fontWeight};
  line-height: ${(props) => props.theme.typography.small.lineHeight};
  font-size: ${(props) => props.theme.typography.small.fontSize}em;
`

// eslint-disable-next-line react/prop-types
const Small = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme()
  return <SmallEl>{children}</SmallEl>
}

export default Small
