import { useInView } from 'react-intersection-observer'

export default (options = {}) =>
  useInView({
    triggerOnce: true,
    rootMargin: '-10% 0px',
    ...options,
  })
