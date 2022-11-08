/* eslint-disable react/prop-types */
import React from 'react'
import JobCard from '../JobCard/JobCard'
import { Hyperlink } from '../../components'
import styled from '@emotion/styled'

const Layout = styled.div`
  height: 21px;
  width: 100%;
  min-height: 300px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  width: 40px;
  position: absolute;
`

const JobCardList = ({ jobs, loading }) => {
  return (
    <div>
      {loading && (
        <Layout>
          <Image alt="loading" src="assets/img/loading.svg" />
        </Layout>
      )}
      {!loading &&
        jobs &&
        jobs.map((item) => (
          <Hyperlink href={`/job/${item.id}`} key={`JobCard-${item.id}`}>
            <JobCard data={item} />
          </Hyperlink>
        ))}
    </div>
  )
}
export default JobCardList
