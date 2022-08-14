import { Outlet } from 'react-router-dom'
import './index.css'

const Home = () => (
  <section className="spacex-home__wrapper">
    <header className="spacex-header">
      <h1>🚀 SpaceX GraphQL Viewer</h1>
    </header>

    <section className="spacex-home-content">
      <Outlet />
    </section>
  </section>
)

export default Home
