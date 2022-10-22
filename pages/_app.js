import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../config/theme'

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
