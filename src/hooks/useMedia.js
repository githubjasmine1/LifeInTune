import { useState, useEffect } from 'react'

const useMedia = (query, defaultMatches = true) => {
  const [matches, setMatches] = useState(defaultMatches)

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)
    let active = true

    const listener = () => {
      if (!active) {
        return
      }

      if (mediaQueryList.matches) {
        setMatches(true)
      } else {
        setMatches(false)
      }
    }

    mediaQueryList.addListener(listener)
    setMatches(mediaQueryList.matches)

    return () => {
      active = false
      mediaQueryList.removeListener(listener)
    }
  }, [query])

  return matches
}

export default useMedia
