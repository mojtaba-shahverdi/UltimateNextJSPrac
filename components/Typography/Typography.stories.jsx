import React from 'react'
import styled from '@emotion/styled'
import H1 from './H1'
import H2 from './H2'
import H3 from './H3'
import H4 from './H4'
import H5 from './H5'
import Paragraph from './Paragraph'
import Small from './Small'

const Heading = styled.h1`
  color: #00b3b3;
  font-weight: bold;
  margin: 3rem 0 1.38rem;
  margin-top: 0;
  font-size: 20px;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export default {
  title: 'Typography',
  component: H1,
  H2,
  H3,
  H4,
  H5,
  Paragraph,
  Small,
}

export const h1 = () => <H1>hello World</H1>
export const h2 = () => <H2>hello World</H2>
export const h3 = () => <H3>hello World</H3>
export const h4 = () => <H4>hello World</H4>
export const h5 = () => <H5>hello World</H5>
export const small = () => <Small>Hello World</Small>
export const paragraph = () => <Paragraph>Hello World</Paragraph>

export const All = () => (
  <Layout>
    <Wrapper>
      <Heading>H1 :</Heading>
      <H1>hello World</H1>
    </Wrapper>
    <Wrapper>
      <Heading>H2 :</Heading>
      <H2>hello World</H2>
    </Wrapper>
    <Wrapper>
      <Heading>H3 :</Heading>
      <H3>hello World</H3>
    </Wrapper>
    <Wrapper>
      <Heading>H4 :</Heading>
      <H4>hello World</H4>
    </Wrapper>
    <Wrapper>
      <Heading>H5 :</Heading>
      <H5>hello World</H5>
    </Wrapper>
    <Wrapper>
      <Heading>Paragraph :</Heading>
      <Paragraph>Hello World</Paragraph>
    </Wrapper>
    <Wrapper>
      <Heading>Small :</Heading>
      <Small>Hello World</Small>
    </Wrapper>
  </Layout>
)
