/* eslint-disable react/prop-types */
import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { Small, H5 } from '../../components'

const JobCard = ({ data }) => {
  const theme = useTheme()

  const Layout = styled.div`
    padding: 16px 48px 16px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.backgroundColorPrimary};
    border-radius: ${theme.borderRadius[1]};
    position: relative;
    cursor: pointer;
    transition-duration: 0.4s;
    margin-bottom: 12px;
    &:hover {
      box-shadow: ${theme.boxShadow.light};
      color: white;
      background-color: ${theme.colors.secondary};
      .inside {
        border-color: white;
      }
    }
  `

  const Inside = styled.div`
    min-width: 300px;
    height: 90px;
    transition-duration: 0.4s;
    display: flex;
    align-items: center;
    border-left: ${theme.border[2]} solid;
    border-color: ${theme.borderColor.light};
  `

  return (
    <Layout>
      <div>
        <Small>{data.company}</Small>
        <H5>{data.title}</H5>
        <Small>{data.job_type}</Small>
      </div>
      <Inside className="inside">
        <Small>{data.date}</Small>
      </Inside>
    </Layout>
  )
}
export default JobCard
