import './index.css'
import { links } from './utils'
import { Link } from 'react-router-dom'
import Logo from './assets/images/logo.png'
import React from 'react'

const Welcome: React.FC = () => (
  <div className="spacex-welcome__wrapper">
    <img width="320" className="spacex-logo" alt="logo.png" src={Logo} />
    <h3 className="spacex-welcome">Welcome to SpaceX API</h3>

    <ul>
      {links.map(link => (
        <Link className="spacex-link" key={link.path} to={link.path}>
          {link.title}
        </Link>
      ))}
    </ul>
  </div>
)

export default Welcome
