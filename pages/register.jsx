import React, { useState } from 'react'
import Head from 'next/head'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'
import {
  InputEmail,
  InputPassword,
  Button,
  H2,
  Space,
  InputText,
  Hyperlink,
} from '../components'
import FormControl from '../containers/FormControl/FormControl'
import { useDispatch, useSelector } from 'react-redux'
import { REGISTER_ACTION } from '../actions'

const Register = () => {
  const dispatch = useDispatch()
  const [formValue, setFormValue] = useState({})
  const auth = useSelector((state) => state.auth)

  const handleSubmit = (e) => {
    e.preventDefault()

    // handling API
    console.log('handleSubmit', formValue)
    dispatch(REGISTER_ACTION())
    // if success
    // router.push('/')
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
        <title>Register</title>

        <meta name="description" content="Generated by create next app" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutAuth>
        <Space />
        <H2>Please Register</H2>
        <form style={{ width: '30%' }} onSubmit={handleSubmit}>
          <FormControl>
            <InputText
              onChange={(value) => handleChange('name', value)}
              placeholder="Name"
            />
          </FormControl>
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
              Register
            </Button>
          </FormControl>
          <div>
            <Hyperlink href="/login">Login</Hyperlink>
          </div>
        </form>
      </LayoutAuth>
    </div>
  )
}

export default Register
