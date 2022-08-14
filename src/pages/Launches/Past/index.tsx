import { useQueryList } from '@/pages/Launches/Past/utils'
import Loading from '@/components/Loading'
import List from './components/List'
import Infinite from '@/components/Infinite'
import { useEffect, useRef } from 'react'

const Past = () => {
  const fetcher = useRef(null)
  const { fetchMore, data = { launchesPast: [] }, loading } = useQueryList()

  useEffect(() => {
    fetcher.current = () => {
      fetchMore({
        variables: {
          offset: data.launchesPast.length,
        },
      })
    }
  }, [data])

  return (
    <section className="spacex-container">
      {loading ? (
        <Loading />
      ) : (
        <Infinite fetcher={fetcher}>
          <List data={data.launchesPast} />
        </Infinite>
      )}
    </section>
  )
}

export default Past
