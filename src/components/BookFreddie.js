import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ButtonLink from './ButtonLink'
import { AutoSlide, AutoFade } from './Animated'
import { media } from '../styles/tools'

const BookFreddie = () => {
  const data = useStaticQuery(graphql`
    {
      bg: file(relativePath: { eq: "book-freddie-ravel.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      freddie: file(relativePath: { eq: "freddie-book-footer.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section className="flex flex-col items-center relative py-20 bg-gray-900 overflow-hidden">
      <Img
        fluid={data.bg.childImageSharp.fluid}
        className="w-full h-full top-0 left-0"
        css={{ position: 'absolute !important' }}
      />
      <AutoFade>
        <h3
          className="relative font-display font-hairline text-xl sm:text-3xl text-gold-500 leading-tight text-center uppercase"
          css={{
            maxWidth: '16em',
            backgroundImage:
              'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Bring freddie to your next event
        </h3>
      </AutoFade>
      <AutoFade>
        <ButtonLink to="/speaker" className="mt-6 text-white">
          Book Freddie Ravel
        </ButtonLink>
      </AutoFade>
      <AutoSlide up translate="50" duration={2000}>
        <Img
          fluid={data.freddie.childImageSharp.fluid}
          className="mt-6"
          css={{
            width: '50vw',
            marginBottom: '-50vw',
            marginLeft: '-2vw',
            [media.tabletMd]: {
              width: '25vw',
              marginBottom: '-24vw',
              marginLeft: '-2vw',
            },
          }}
        />
      </AutoSlide>
    </section>
  )
}

export default BookFreddie
