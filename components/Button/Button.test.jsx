/* eslint-disable prettier/prettier */
import React from 'react'
import { fireEvent, render } from '@testing-library/react';
import Button from './Button'
import mountWithTheme from '../../utils/mountWithTheme'
import { ThemeProvider } from '@emotion/react';
import theme from '../../config/theme';

describe('Button', () => {
    test('Render Correctly', () => {
        const component = mountWithTheme(<Button>Sample Button</Button>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    test('Shows Loading State', () => {
        const component = mountWithTheme(<Button loading>Sample Button with Loading</Button>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    test('Shows Disabled State', () => {
        const component = mountWithTheme(<Button Disabled>Sample Button with Disabled State</Button>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    test('Shows buttonType Secondary', () => {
        const component = mountWithTheme(<Button buttonType="secondary">Sample Button with Secondary Style</Button>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
    test('Renders in DOM correctly', () => {
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Button>Sample Button in DOM</Button>
            </ThemeProvider>
        )
        expect(getByText(/Sample Button/)).toBeTruthy()
    })
    test('onClick works Fine', () => {
        let variable = 1
        const { getByText } = render(
            <ThemeProvider theme={theme}>
                <Button onClick={() => {
                    variable++
                }}>Sample Button in DOM</Button>
            </ThemeProvider>
        )
        fireEvent.click(getByText(/Sample Button/))

        expect(variable).toBe(2)
    })
})
