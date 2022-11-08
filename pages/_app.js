import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../config/theme'
import { Provider } from 'react-redux'
import store from '../config/store'

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default MyApp
