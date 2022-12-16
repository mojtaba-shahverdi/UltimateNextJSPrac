import React from 'react'
import App from 'next/app'
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

MyApp.getInitialProps = async (appContext) => {
  appContext.ctx.reduxStore = store
  const pageProps = await App.getInitialProps(appContext)

  return {
    ...pageProps,
  }
}

export default MyApp
