import './index.css'
import React from 'react'

interface IProps {
  post: string
  onOpen(): void
}

const Poster: React.FC<IProps> = ({ post, onOpen }) => (
  <div className="spacex-video-player">
    <img className="spacex-video-poster" alt="" src={post} />
    <button className="spacex-video-btn" onClick={onOpen} />
  </div>
)

export default Poster
