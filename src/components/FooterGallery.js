import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

import { media } from '../styles/tools'

import Gallery from './Gallery'

const Arrow = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M18,11H10L13.5,7.5L12.08,6.08L6.16,12L12.08,17.92L13.5,16.5L10,13H18V11Z" />
  </svg>
)

const FooterGallery = () => {
  const data = useStaticQuery(graphql`
    {
      img00a: file(relativePath: { eq: "gallery/Freddie_Virtual.jpg" }) {
        ...photoSwipeImage
      }
      img00: file(relativePath: { eq: "gallery/freddie-audience3.jpg" }) {
        ...photoSwipeImage
      }
      img01: file(relativePath: { eq: "gallery/freddie-tony.png" }) {
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
      img09: file(relativePath: { eq: "gallery/freddie-stage.png" }) {
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
              slidesPerView: 2.35,
              navigation: {
                nextEl: '.next-arrow',
                prevEl: '.prev-arrow',
              },
              breakpoints: {
                600: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 5,
                },
              },
              renderPrevButton: () => (
                <button
                  className="absolute z-10 w-8 h-8 -mt-4 text-white transition prev-arrow lg:w-10 lg:h-10 lg:-mt-5 hover:text-gold-300 focus:outline-none"
                  css={{
                    top: '50%',
                    left: 10,
                    [media.tablet]: { left: 20 },
                    '&.swiper-button-disabled': {
                      [media.tablet]: { opacity: 0.5 },
                      opacity: 0,
                      pointerEvents: 'none',
                    },
                  }}
                >
                  <Arrow className="block w-full h-full fill-current" />
                </button>
              ),
              renderNextButton: () => (
                <button
                  className="absolute z-10 w-8 h-8 -mt-4 text-white transition next-arrow lg:w-10 lg:h-10 lg:-mt-5 hover:text-gold-300 focus:outline-none"
                  css={{
                    top: '50%',
                    right: 10,
                    [media.tablet]: { right: 20 },
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
                  className="object-cover w-full h-full transition cursor-pointer"
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
