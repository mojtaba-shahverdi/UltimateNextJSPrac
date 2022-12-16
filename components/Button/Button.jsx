import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

// eslint-disable-next-line react/prop-types
const Button = ({ type = 'button', children, widthAll, loading }) => {
  const theme = useTheme()

  const Layout = styled.div`
    width: 100%;
  `
  const ButtonEl = styled.button`
    width: ${widthAll ? '100%' : 'auto'};
    background: ${theme.colors.primary};
    color: #fff;
    font-size: ${theme.typography.paragraph.fontSize};
    text-decoration: none;
    padding: ${theme.spaces[4]};
    border: ${theme.border[1]};
    border-radius: ${theme.borderRadius[1]};
    display: inline-block;
    position: relative;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    &:hover {
      box-shadow: ${theme.boxShadow.light};
      background: ${theme.colors.primaryHover};
      color: #000;
      font-weight: bold;
    }
    &:active {
      box-shadow: ${theme.boxShadow.light} inset;
    }
  `
  return (
    <Layout>
      <ButtonEl>
        {loading && <img src="/loading.gif" width="6%" />}
        {!loading && children}
      </ButtonEl>
    </Layout>
  )
}

export default Button
