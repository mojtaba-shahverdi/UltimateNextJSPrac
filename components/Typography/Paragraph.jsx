import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

const ParagraphEl = styled.p`
  margin: 3rem 0 1.38rem;
  margin-top: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: ${(props) => props.theme.typography.paragraph.fontWeight};
  line-height: ${(props) => props.theme.typography.paragraph.lineHeight};
  font-size: ${(props) => props.theme.typography.paragraph.fontSize}em;
`

// eslint-disable-next-line react/prop-types
const Paragraph = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme()
  return <ParagraphEl>{children}</ParagraphEl>
}

export default Paragraph
