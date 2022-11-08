import React from "react"
import { ThemeProvider } from "@emotion/react"
import theme from '../config/theme'
import { css, cx } from '@emotion/css'
import Reset from '../containers/Reset/Reset'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <div
        className={css`
        max-width: 600px;
        display: flex;
        margin: 20px auto;

      `}
      >
        <Reset />
        <Story />
      </div>
    </ThemeProvider>
  ),
];
