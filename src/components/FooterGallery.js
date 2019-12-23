import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

import Gallery from './Gallery'

const Arrow = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M18,11H10L13.5,7.5L12.08,6.08L6.16,12L12.08,17.92L13.5,16.5L10,13H18V11Z" />
  </svg>
)

const FooterGallery = () => {
  const data = useStaticQuery(graphql`
    {
      img01: file(relativePath: { eq: "gallery/freddie-stage.png" }) {
        ...photoSwipeImage
      }
      img02: file(relativePath: { eq: "gallery/freddie-audience.png" }) {
        ...photoSwipeImage
      }
      img03: file(relativePath: { eq: "gallery/freddie-audience2.png" }) {
        ...photoSwipeImage
      }
      img04: file(relativePath: { eq: "gallery/freddie-clapping.png" }) {
        ...photoSwipeImage
      }
      img05: file(relativePath: { eq: "gallery/freddie-concert.png" }) {
        ...photoSwipeImage
      }
      img06: file(relativePath: { eq: "gallery/freddie-pitbull.png" }) {
        ...photoSwipeImage
      }
      img07: file(relativePath: { eq: "gallery/freddie-planners.png" }) {
        ...photoSwipeImage
      }
      img08: file(relativePath: { eq: "gallery/freddie-stage2.png" }) {
        ...photoSwipeImage
      }
      img09: file(relativePath: { eq: "gallery/freddie-tony.png" }) {
        ...photoSwipeImage
      }
      img10: file(relativePath: { eq: "gallery/ravel-audience.png" }) {
        ...photoSwipeImage
      }
      img11: file(relativePath: { eq: "gallery/ravel-concert.png" }) {
        ...photoSwipeImage
      }
      img12: file(relativePath: { eq: "gallery/ravel-fan.png" }) {
        ...photoSwipeImage
      }
      img13: file(relativePath: { eq: "gallery/ravel-keynote.png" }) {
        ...photoSwipeImage
      }
      img14: file(relativePath: { eq: "gallery/ravel-speaking.png" }) {
        ...photoSwipeImage
      }
    }
  `)

  const images = Object.values(data).map(img => ({
    msrc: img.childImageSharp.msrc.src,
    src: img.childImageSharp.src.src,
    w: img.childImageSharp.src.width,
    h: img.childImageSharp.src.height,
  }))

  return (
    <section className="relative bg-gray-900">
      <Gallery items={images}>
        {({ saveRef, openGallery }) => (
          <Swiper
            {...{
              // freeMode: true,
              slidesPerView: 5,
              navigation: {
                nextEl: '.next-arrow',
                prevEl: '.prev-arrow',
              },
              renderPrevButton: () => (
                <button
                  className="prev-arrow w-10 h-10 -mt-5 absolute z-10 text-white hover:text-gold-300 transition focus:outline-none"
                  css={{
                    top: '50%',
                    left: 20,
                    '&.swiper-button-disabled': {
                      opacity: 0.5,
                      pointerEvents: 'none',
                    },
                  }}
                >
                  <Arrow className="block w-full h-full fill-current" />
                </button>
              ),
              renderNextButton: () => (
                <button
                  className="next-arrow w-10 h-10 -mt-5 absolute z-10 text-white hover:text-gold-300 transition focus:outline-none"
                  css={{
                    top: '50%',
                    right: 20,
                    '&.swiper-button-disabled': {
                      opacity: 0.5,
                      pointerEvents: 'none',
                    },
                    transform: 'rotate(180deg)',
                  }}
                >
                  <Arrow className="block w-full h-full fill-current" />
                </button>
              ),
            }}
          >
            {images.map(({ msrc }, i) => (
              <div
                key={i}
                ref={saveRef}
                className="flex-shrink-0 w-1/5"
                onClick={() => openGallery(i)}
              >
                <img
                  src={msrc}
                  className="w-full h-full object-cover transition cursor-pointer"
                  css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
                />
              </div>
            ))}
          </Swiper>
        )}
      </Gallery>
    </section>
  )
}

export default FooterGallery
