import React, { useState } from 'react'

const PlayButton = ({ size = 160, color = '#fff' }) => (
  <svg
    viewBox="0 0 213.7 213.7"
    css={{
      width: size,
      height: size,
      fill: 'none',
      stroke: color,
      strokeWidth: 5,
      filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, .2))',
      circle: {
        strokeDasharray: '650',
        strokeDashoffset: '650',
        transition: '.5s ease-in-out',
      },
      polygon: {
        strokeDasharray: '240',
        strokeDashoffset: '480',
        transition: '.7s ease-in-out',
      },
      '.hoverPlayButton:hover &': {
        polygon: { strokeDashoffset: 0 },
        circle: { strokeDashoffset: 0 },
      },
    }}
  >
    <polygon points="73.5,62.5 148.5,105.8 73.5,149.1" />
    <circle cx="106.8" cy="106.8" r="103.3" />
  </svg>
)

const WebrollPlayer = ({
  label,
  visible,
  src,
  ratio = 1080 / 1920,
  ...rest
}) => (
  <div className="transition-slow ease-out cursor-pointer" {...rest}>
    <div
      css={{ width: '100%', position: 'absolute', top: 0, left: 0 }}
      className="hoverPlayButton"
    >
      <div
        css={{
          display: 'block',
          position: 'relative',
          backgroundColor: '#000',
          cursor: 'pointer',
          '::after': {
            content: '""',
            display: 'block',
            paddingTop: `${ratio * 100}%`,
          },
          '& video': {
            display: 'block',
            width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
            objectFit: 'cover',
          },
        }}
      >
        <video autoPlay loop playsInline muted>
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <PlayButton size={130} />
        {label && (
          <div className="mt-5 font-display uppercase text-white">{label}</div>
        )}
      </div>
    </div>
  </div>
)

const VideoPlayer = ({ label, webroll, video, ratio, ...props }) => {
  const [webrollPlaying, setWebrollPlaying] = useState(true)

  return (
    <div css={{ position: 'relative' }} {...props}>
      <div className="w-full relative">
        <div css={{ paddingTop: `${ratio * 100}%` }} />
        {!webrollPlaying && video}
      </div>
      <WebrollPlayer
        label={label}
        style={{
          opacity: webrollPlaying ? 1 : 0,
          visibility: webrollPlaying ? 'visible' : 'hidden',
        }}
        onClick={() => setWebrollPlaying(false)}
        src={webroll}
        ratio={ratio}
      />
    </div>
  )
}

export default VideoPlayer
