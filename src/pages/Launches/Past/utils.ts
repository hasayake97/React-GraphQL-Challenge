import { useQuery } from '@apollo/client'
import { past, ILaunchesPast } from '@/services/modules/launches'

interface ILaunchesPastWrapper {
  fetchMore: any
  loading: boolean
  data: {
    launchesPast: Array<ILaunchesPast>
  }
}

export const useQueryList = (): ILaunchesPastWrapper => {
  const { fetchMore, data, loading } = useQuery(past, {
    variables: {
      offset: 0,
      limit: 10,
    },
  })

  return {
    data,
    loading,
    fetchMore,
  }
}
