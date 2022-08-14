import React, { ReactNode, useRef } from 'react'
import { useObserver } from './utils'
import './index.css'

interface IProps {
  children: ReactNode
  fetcher: { current: null | any }
}

const Infinite: React.FC<IProps> = ({ children, fetcher }) => {
  const cursor = useRef(null)

  useObserver(cursor, fetcher)

  return (
    <section className="infinite">
      {children}
      <i className="infinite-cursor" ref={cursor} />
    </section>
  )
}

export default Infinite
