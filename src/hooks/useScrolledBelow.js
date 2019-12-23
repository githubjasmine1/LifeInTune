import { useState, useRef, useEffect, useCallback } from 'react'
import debounce from 'lodash.debounce'

import { passive } from '../utils'

const useScrolledBelow = userValue => {
  const [isBelow, setIsBelow] = useState(false)
  const threshold = useRef(0)

  const update = useCallback(() => {
    setIsBelow(window.pageYOffset >= Math.max(1, threshold.current))
  }, [threshold, setIsBelow])

  useEffect(() => {
    setTimeout(() => {
      threshold.current =
        typeof userValue === 'function' ? userValue() : userValue
      update()
    })
  }, []) // eslint-disable-line

  useEffect(() => {
    const handleResize = debounce(() => {
      threshold.current =
        typeof userValue === 'function' ? userValue() : userValue
      update()
    }, 300)

    window.addEventListener('scroll', update, passive)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', handleResize)
    }
  }, [update]) // eslint-disable-line

  return isBelow
}

export default useScrolledBelow
