import React from 'react'
import { css } from '@emotion/css'
import { useTheme } from '@emotion/react'
import { H1, Paragraph, Button } from '../../components'
import styled from '@emotion/styled'

const HomePageBanner = () => {
  const theme = useTheme()

  const Layout = styled.div`
    background-color: ${theme.colors.backgroundColorPrimary};
  `
  const Wraper = styled.div`
    display: flex;
    justify-content: center;
    max-width: 400px;
    padding: 32px 0;
    margin: 0 auto;
    text-align: center;
    flex-direction: column;
  `
  return (
    <Layout>
      <Wraper>
        <H1
          align="center"
          className={css`
            padding-bottom: 16px;
          `}
        >
          We work Remotly
        </H1>
        <Paragraph align="center">
          Hire the best freelancers for any job, online.
        </Paragraph>
        <Button buttonType="tertiary">Register in RemoteJob</Button>
      </Wraper>
    </Layout>
  )
}

export default HomePageBanner
