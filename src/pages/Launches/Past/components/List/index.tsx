import './index.css'
import Poster from './components/Poster'
import Detail from './components/Detail'
import React, { useMemo, useReducer } from 'react'
import { getLinks, reducer, IProps } from './utils'

const List: React.FC<IProps> = ({ data }) => {
  const [v, videoDispatch] = useReducer(reducer, { visible: false, detail: {} })

  const renderList = useMemo(
    () => data.map(item => ({ ...item, ...getLinks(item.links.video_link) })),
    [data],
  )

  return (
    <section className="spacex-card-list">
      {renderList.map(item => (
        <div className="spacex-card-item" key={item.id}>
          <Poster post={item.post} onOpen={() => videoDispatch({ type: 'open', detail: item })} />
        </div>
      ))}

      {v.visible && <Detail {...v} onClose={() => videoDispatch({ type: 'close', detail: {} })} />}
    </section>
  )
}

export default List
