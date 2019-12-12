import React from 'react'
import Component from '@reach/component-component'
import styled from '@emotion/styled'

import Img from './RatioImg'

const VideoWrapper = styled.div(({ ratio = 2 / 3 }) => ({
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
  },
}))

const Scrubber = styled.div(() => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: 15,
  backgroundColor: '#fff',
  transformOrigin: 'center bottom',
  transform: 'scaleY(0)',
  transition: '.2s',
  cursor: 'crosshair',
  '*:hover > &': {
    transform: 'scaleY(1)',
  },
}))

const Progress = styled.div({
  height: '100%',
  backgroundColor: '#111',
})

class FullVideoPlayer extends React.Component {
  state = {
    progress: 0,
    canScrub: false,
    isPlaying: false,
  }

  componentDidMount() {
    document.documentElement.addEventListener('mouseup', this.onMouseUp)
  }

  componentWillUnmount() {
    document.documentElement.removeEventListener('mouseup', this.onMouseUp)
  }

  onMouseUp = () => this.setState({ canScrub: false })

  componentWillReceiveProps(nextProps) {
    if (nextProps.isPlaying) {
      const playPromise = this.video.play()
      if (playPromise !== undefined) {
        playPromise.then(() => this.setState({ isPlaying: true }))
      } else {
        this.setState({ isPlaying: true })
      }
    } else {
      this.video.pause()
      this.setState({ isPlaying: false })
    }
  }

  setProgressFromClick = ({ clientX }) => {
    const BCR = this.scrubber.getBoundingClientRect()
    const progress = (clientX - BCR.left) / BCR.width

    this.setState({ progress })
    this.video.currentTime = Math.round(this.video.duration * progress)
  }

  onClick = e => this.setProgressFromClick(e)

  onMouseMove = e => this.state.canScrub && this.setProgressFromClick(e)

  togglePlay = () => {
    if (this.state.isPlaying) {
      this.video.pause()
      this.setState({ isPlaying: false })
    } else {
      this.video.play()
      this.setState({ isPlaying: true })
    }
  }

  onTimeUpdate = () => {
    this.setState({
      progress: this.video.currentTime / this.video.duration,
    })
  }

  render() {
    return (
      <div css={{ position: 'relative ' }}>
        <VideoWrapper ratio={this.props.ratio}>
          <video
            ref={ref => (this.video = ref)}
            onClick={this.togglePlay}
            onTimeUpdate={this.onTimeUpdate}
            playsInline=""
          >
            <source src={this.props.src} type="video/mp4" />
          </video>
        </VideoWrapper>
        <Scrubber
          ref={ref => (this.scrubber = ref)}
          onMouseDown={() => this.setState({ canScrub: true })}
          onMouseUp={() => this.setState({ canScrub: false })}
          onClick={this.onClick}
          onMouseMove={this.onMouseMove}
          progress={0.4}
        >
          <Progress css={{ width: `${this.state.progress * 100}%` }} />
        </Scrubber>
      </div>
    )
  }
}

const PlayButtonSVG = styled('svg')(() => ({
  filter: 'drop-shadow(0 0 3px rgba(0, 0, 0, .2))',
  '& circle': {
    strokeDasharray: '650',
    strokeDashoffset: '650',
    transition: '.5s ease-in-out',
  },
  '& polygon': {
    strokeDasharray: '240',
    strokeDashoffset: '480',
    transition: '.7s ease-in-out',
  },
  '.hoverPlayButton:hover &': {
    '& polygon': { strokeDashoffset: 0 },
    '& circle': { strokeDashoffset: 0 },
  },
}))

const PlayButton = ({ size = 160, color = '#fff' }) => (
  <PlayButtonSVG
    viewBox="0 0 213.7 213.7"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="5"
  >
    <polygon points="73.5,62.5 148.5,105.8 73.5,149.1" />
    <circle cx="106.8" cy="106.8" r="103.3" />
  </PlayButtonSVG>
)

const WebrollPlayerWrapper = styled('div')(({ visible }) => ({
  opacity: visible ? 1 : 0,
  visibility: visible ? 'visible' : 'hidden',
  transition: '.3s',
  cursor: 'pointer',
}))

const WebrollPlayer = ({ visible, src, ratio, ...rest }) => (
  <WebrollPlayerWrapper visible={visible} {...rest}>
    <div
      css={{ width: '100%', position: 'absolute', top: 0, left: 0 }}
      className="hoverPlayButton"
    >
      <VideoWrapper ratio={ratio}>
        <video autoPlay loop playsInline muted>
          <source src={src} type="video/mp4" />
        </video>
      </VideoWrapper>
      <div
        css={{
          display: 'flex',
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
      </div>
    </div>
  </WebrollPlayerWrapper>
)

const Poster = ({ visible, src, ratio, ...rest }) => (
  <WebrollPlayerWrapper visible={visible} {...rest}>
    <div
      css={{ width: '100%', position: 'absolute', top: 0, left: 0 }}
      className="hoverPlayButton"
    >
      <Img src={src} ratio={ratio} />
      <div
        css={{
          display: 'flex',
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
      </div>
    </div>
  </WebrollPlayerWrapper>
)

const VideoPlayer = ({ webroll, video, poster, ratio, className }) => (
  <Component initialState={{ webrollPlaying: true }}>
    {({ state, setState }) => (
      <div className={className} css={{ position: 'relative' }}>
        <FullVideoPlayer
          isPlaying={!state.webrollPlaying}
          src={video}
          ratio={ratio}
        />
        {poster ? (
          <Poster
            visible={state.webrollPlaying}
            onClick={() => setState({ webrollPlaying: false })}
            src={poster}
            ratio={ratio}
          />
        ) : (
          <WebrollPlayer
            visible={state.webrollPlaying}
            onClick={() => setState({ webrollPlaying: false })}
            src={webroll}
            ratio={ratio}
          />
        )}
      </div>
    )}
  </Component>
)

export default VideoPlayer
