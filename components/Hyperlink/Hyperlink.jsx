import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useTheme, keyframes } from '@emotion/react'

// eslint-disable-next-line react/prop-types
const Hyperlink = ({ href, children }) => {
  const theme = useTheme()
  const Layout = styled.div`
    width: fit-content;
  `

  const Line = keyframes`
    0%{
      width: 0
    }
    25%{
      left: 25%
    }
    50%{
      left: 20%;
    }
    100%{
      right: 0;
      width: 100%
    }
  `
  const LinkEl = styled.a`
    text-decoration: none;
    position: relative;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      color: ${theme.colors.primary};
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -1px;
        width: 100%;
        height: 3px;
        z-index: -10;
        background: ${theme.colors.primaryHover};
        animation: ${Line} 1s;
      }
    }
  `
  return (
    <Layout>
      <Link href={href}>
        <LinkEl>{children}</LinkEl>
      </Link>
    </Layout>
  )
}

export default Hyperlink
