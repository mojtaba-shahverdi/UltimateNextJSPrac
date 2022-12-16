import React from 'react'
import { useTheme } from '@emotion/react'
import { css } from '@emotion/css'
import PropTypes from 'prop-types'

const Button = ({
  children,
  widthAll,
  loading,
  disabled,
  type = 'button',
  buttonType = 'primary',
  onClick = () => {},
}) => {
  const theme = useTheme()
  const B = css`
    width: ${widthAll ? '100%' : 'auto'};
    background: ${theme.colors[buttonType]};
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
    &:disabled {
      background-color: ${theme.colors.backgroundColorSecondary};
      cursor: no-drop;
    }
  `
  return (
    <div
      className={css`
        width: 100%;
      `}
    >
      <button
        className={B}
        disabled={disabled || loading}
        type={type}
        onClick={onClick}
      >
        {loading && <img src="/loading.gif" width="6%" />}
        {!loading && children}
      </button>
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  widthAll: PropTypes.any,
  loading: PropTypes.any,
  disabled: PropTypes.any,
  type: PropTypes.any,
  buttonType: PropTypes.any,
  onClick: PropTypes.any,
}

export default Button
