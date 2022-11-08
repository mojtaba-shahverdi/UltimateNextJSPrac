import styled from '@emotion/styled'
import React from 'react'

const Layout = styled.div`
  width: 100%;
`

const InputEl = styled.input`
  background: ${(props) => props.theme.colors.backgroundPrimary};
  font-size: ${(props) => props.theme.typography.paragraph.fontSize};
  text-decoration: none;
  border: ${(props) => props.theme.borderRadius[1]} solid;
  border-color: ${(props) => props.theme.borderColor.light};
  padding: ${(props) => props.theme.spaces[4]};
  border-radius: ${(props) => props.theme.borderRadius[1]};
  display: inline-block;
  width: 100%;
  position: relative;
  cursor: pointer;
  &:focus {
    border: ${(props) => props.theme.borderRadius[1]} solid;
    border-color: ${(props) => props.theme.colors.primaryHover};
    outline: none;
  }
`

// eslint-disable-next-line react/prop-types
const Input = ({ type = 'text', placeholder, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <Layout>
      <InputEl type={type} onChange={handleChange} placeholder={placeholder} />
    </Layout>
  )
}

export default Input
