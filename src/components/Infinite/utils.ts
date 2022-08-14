import { useEffect } from 'react'

export const useObserver = (el, fetcher) => {
  const io = new IntersectionObserver(entries => {
    const cur = entries[0]

    if (cur.intersectionRatio >= 0.6) {
      fetcher.current()
    }
  })

  useEffect(() => {
    io.observe(el.current)
  }, [])
}
