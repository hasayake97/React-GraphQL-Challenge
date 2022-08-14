import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '@/pages/Home'
import Loading from '@/components/Loading'

const Launches = lazy(() => import('@/pages/Launches'))
const Past = lazy(() => import('@/pages/Launches/Past'))
const Next = lazy(() => import('@/pages/Launches/Next'))
const Welcome = lazy(() => import('@/pages/Welcome'))

const routes = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Welcome />} />
          <Route path="launches" element={<Launches />}>
            <Route path="past" element={<Past />} />
            <Route path="next" element={<Next />} />
          </Route>
        </Route>

        <Route path="*" element={<div>404: not found</div>} />
      </Routes>
    </Suspense>
  </BrowserRouter>
)

export default routes
