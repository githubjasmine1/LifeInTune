import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'

const RotateWords = ({ words = [], duration = 5000, ...props }) => {
  const [index, setIndex] = useState(0)
  const transitions = useTransition(words[index], item => item, {
    from: { opacity: 0, transform: 'scaleX(1.2)' },
    enter: { opacity: 1, transform: 'scaleX(1)' },
    leave: { opacity: 0, transform: 'scaleX(0.8)' },
    config: config.gentle,
  })

  useEffect(() => {
    const intervalID = setInterval(
      () => setIndex(state => (state + 1) % words.length),
      duration
    )
    return () => clearInterval(intervalID)
  }, [setIndex, words.length, duration])

  return (
    <div
      css={{
        display: 'grid',
        '> *': {
          gridArea: '1 / 1 / 2 / 2',
        },
      }}
      {...props}
    >
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          {item}
        </animated.div>
      ))}
    </div>
  )
}

export default RotateWords
