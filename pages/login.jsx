import React, { useState } from 'react'
import Head from 'next/head'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'
import {
  InputEmail,
  InputPassword,
  Button,
  H2,
  Space,
  Hyperlink,
} from '../components'
import FormControl from '../containers/FormControl/FormControl'
import { css } from '@emotion/css'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN_ACTION } from '../actions'

const Login = () => {
  const dispatch = useDispatch()
  const [formValue, setFormValue] = useState({})
  const auth = useSelector((state) => state.auth)
  console.log('auth', auth)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // handling API
    console.log('handleSubmit', formValue)

    dispatch(LOGIN_ACTION())

    // if success
  }

  const handleChange = (name, value) => {
    setFormValue({
      ...formValue,
      [name]: value,
    })
  }

  return (
    <div className="container">
      <Head>
        <title>Login</title>

        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutAuth>
        <Space />
        <H2>Welcome to Remote</H2>
        <form style={{ width: '30%' }} onSubmit={handleSubmit}>
          <FormControl>
            <InputEmail
              onChange={(value) => handleChange('email', value)}
              placeholder="Email"
            />
          </FormControl>
          <FormControl>
            <InputPassword
              onChange={(value) => handleChange('password', value)}
              placeholder="Password"
            />
          </FormControl>
          <FormControl>
            <Button widthAll type="submit" loading={auth.loading}>
              Submit
            </Button>
          </FormControl>
          <div
            className={css`
              display: flex;
              justify-content: space-between;
            `}
          >
            <Hyperlink href="register">Register</Hyperlink>
            <Hyperlink href="forgot">Forgot Password</Hyperlink>
          </div>
        </form>
      </LayoutAuth>
    </div>
  )
}

export default Login
