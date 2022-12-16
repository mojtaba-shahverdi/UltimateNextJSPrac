import React from 'react'
import Head from 'next/head'
import { css } from '@emotion/css'
import LayoutPage from '../containers/LayoutPage/LayoutPage'
import HomePageBanner from '../containers/HomePageBanner/HomePageBanner'
import JobCardList from '../containers/JobCardList/JobCardList'
import { H2 } from '../components'
import { GET_LIST_JOB_ACTION } from '../actions'

const Home = ({ jobs, loading }) => {
  return (
    <div className="container">
      <Head>
        <title>Remote Job</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutPage>
        <HomePageBanner />
        <div
          className={css`
            display: flex;
            max-width: 1000px;
            padding: 32px 0;
            margin: 0 auto;
            flex-direction: column;
          `}
        >
          <H2
            className={css`
              padding-bottom: 32px;
            `}
          >
            Jobs List
          </H2>
          <div>
            <JobCardList jobs={jobs} loading={loading} />
          </div>
        </div>
      </LayoutPage>
    </div>
  )
}

Home.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(GET_LIST_JOB_ACTION())
  const { job } = reduxStore.getState()
  return {
    loading: job.loading,
    jobs: job.jobs,
  }
}

export default Home
