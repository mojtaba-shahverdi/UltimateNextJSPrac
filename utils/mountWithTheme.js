import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../config/theme'
import renderer from 'react-test-renderer'

const mountWithTheme = (children) => {
    return renderer.create(
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}

export default mountWithTheme
