/* eslint-disable prettier/prettier */
import React from 'react'
import Button from './Button'
import mountWithTheme from '../../utils/mountWithTheme'

describe('Button', () => {
    test('Render Correctly', () => {
        const component = mountWithTheme(<Button>Sample Button</Button>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
