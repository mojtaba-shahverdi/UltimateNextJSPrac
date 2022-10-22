import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

const H5El = styled.h5`
  margin: 3rem 0 1.38rem;
  margin-top: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => props.theme.typography.h5.fontWeight};
  line-height: ${(props) => props.theme.typography.h5.lineHeight};
  font-size: ${(props) => props.theme.typography.h5.fontSize}em;
`

// eslint-disable-next-line react/prop-types
const H5 = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme()
  return <H5El>{children}</H5El>
}

export default H5
