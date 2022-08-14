import { useQuery } from '@apollo/client'
import { next, ILauncheNext } from '@/services/modules/launches'

interface INext {
  data: { launchNext?: ILauncheNext }
  loading: boolean
}

export const useNextQuery = (): INext => {
  const { data, loading } = useQuery(next)

  return {
    data,
    loading,
  }
}
