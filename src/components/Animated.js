import React, { forwardRef } from 'react'
import styled from '@emotion/styled'
import shouldForwardProp from '@emotion/is-prop-valid'

import useInView from '../hooks/useInView'

export const animatedClassName = 'js-animated'

const observed = Component => ({ options, ...props }) => {
  const [ref, inView] = useInView(options)

  return <Component ref={ref} inView={inView} {...props} />
}

const AnimatedElement = forwardRef(
  ({ as: As = 'span', className, ...props }, ref) => (
    <As ref={ref} className={`${animatedClassName} ${className}`} {...props} />
  )
)

export let Fade = styled(AnimatedElement, { shouldForwardProp })(
  {
    display: 'block',
    willChange: 'opacity',
    transitionProperty: 'opacity',
  },
  ({ inView, duration = 1000, delay = 0 }) => ({
    opacity: inView ? 1 : 0,
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  })
)

export let Scale = styled(AnimatedElement, { shouldForwardProp })(
  {
    display: 'block',
    willChange: 'transform, opacity',
    transitionProperty: 'transform, opacity',
  },
  ({ inView, scale = 0.8, duration = 1000, delay = 0 }) => ({
    transform: inView ? 'none' : `scale(${scale})`,
    opacity: inView ? 1 : 0,
    transitionDuration: `${duration}ms`,
    transitionDelay: `${delay}ms`,
  })
)

export let Slide = styled(AnimatedElement, { shouldForwardProp })(
  {
    display: 'block',
    willChange: 'transform, opacity',
    transitionProperty: 'transform, opacity',
    transitionTimingFunction: 'cubic-bezier(0.3, 0.8, 0.2, 1)',
  },
  ({
    inView,
    direction = 'left',
    up,
    right,
    down,
    left,
    translate = 100,
    duration = 1000,
    delay = 0,
  }) => {
    if (up) direction = 'up'
    if (right) direction = 'right'
    if (down) direction = 'down'
    if (left) direction = 'left'

    return {
      transform: inView
        ? 'none'
        : {
            up: `translateY(${translate}px)`,
            down: `translateY(${-translate}px)`,
            left: `translateX(${translate}px)`,
            right: `translateX(-${translate}px)`,
          }[direction],
      opacity: inView ? 1 : 0,
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
    }
  }
)

export let Reveal = styled(AnimatedElement, { shouldForwardProp })(
  {
    display: 'block',
    position: 'relative',
    overflow: 'hidden',

    '> div': {
      willChange: 'transform',
      transitionProperty: 'transform',
      transitionDuration: '1.5s',
      transitionTimingFunction: 'cubic-bezier(0.3, 0.8, 0.2, 1)',
    },

    '::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      transformOrigin: 'left center',
      willChange: 'transform',
      transitionProperty: 'transform',
      transitionDuration: '1s',
      transitionTimingFunction: 'cubic-bezier(0.3, 0.8, 0.2, 1)',
    },
  },
  ({ direction = 'left', color = '#000', inView }) => ({
    backgroundColor: color,

    '> div': {
      transform: `scale(${inView ? 1 : 1.4})`,
    },

    '::after': {
      backgroundColor: color,
      transformOrigin: {
        up: 'center top',
        right: 'right center',
        down: 'center bottom',
        left: 'left center',
      }[direction],
      transform: inView ? 'scaleX(0)' : 'none',
    },
  })
)

export const AutoFade = observed(Fade)
export const AutoScale = observed(Scale)
export const AutoSlide = observed(Slide)
export const AutoReveal = observed(Reveal)
