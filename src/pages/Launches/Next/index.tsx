import { useNextQuery } from './utils'
import './index.css'
import React, { useMemo } from 'react'

const Next: React.FC = () => {
  const { data } = useNextQuery()

  const launchNext = useMemo(() => data?.launchNext, [data])

  return (
    <section className="spacex-next">
      <h2 className="spacex-title">Launches Next</h2>

      <div className="spacex-next-content">
        <div>id: {launchNext?.id}</div>
        <div>date: {new Date(launchNext?.launch_date_local).toLocaleString()}</div>
        <div>site_nameL: {launchNext?.launch_site?.site_name_long}</div>
        <div>article_link: {launchNext?.links.article_link || '暂无'}</div>
        <div>video_link: {launchNext?.links.video_link || '暂无'}</div>
        <div>mission_name: {launchNext?.mission_name}</div>
        <div>
          rocket: {launchNext?.rocket?.rocket_type} - {launchNext?.rocket?.rocket_name}
        </div>
        <div>details: {launchNext?.details}</div>
      </div>
    </section>
  )
}

export default Next
