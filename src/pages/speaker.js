import React, { useRef, useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { media } from '../styles/tools'

import SEO from '../components/SEO'
import Container from '../components/Container'
import BookFreddie from '../components/BookFreddie'
import FooterGallery from '../components/FooterGallery'
import ButtonLink from '../components/ButtonLink'
import RotateWords from '../components/RotateWords'
import VideoPlayer from '../components/VideoPlayer'
import Link from '../components/Link'
import Logo from '../components/Logo'
import Space from '../components/Space'
import { AutoSlide, AutoScale, AutoFade } from '../components/Animated'

import bgVideoColor from '../assets/bg-video-color.mp4'

export const query = graphql`
  query {
    waves: file(relativePath: { eq: "gold-wave.png" }) {
      childImageSharp {
        fluid(maxWidth: 2500, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    freddie: file(relativePath: { eq: "freddie.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    signature: file(relativePath: { eq: "signature.png" }) {
      childImageSharp {
        fixed(width: 1928, height: 883, quality: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Speaker" />
    <section
      className="pt-10 pb-56 text-white"
      css={{ backgroundColor: '#1b1b1b' }}
    >
      <div
        css={{
          display: 'grid',
          minHeight: '100vh',
          '--space': '20px',
          gridTemplateColumns: 'var(--space) .2fr 1fr 1.5fr var(--space)',
          [media.laptop]: {
            '--space': '13vw',
            gridTemplateColumns: 'var(--space) 1fr 1fr 1.5fr var(--space)',
          },
        }}
      >
        <AutoFade
          duration={3000}
          css={{ gridRow: 1, gridColumn: '1 / -1', zIndex: 1 }}
        >
          <Img
            fluid={data.waves.childImageSharp.fluid}
            className="w-full self-start select-none"
          />
        </AutoFade>
        <AutoSlide
          up
          delay={300}
          css={{
            gridRow: 1,
            gridColumn: '1 / 4',
            zIndex: 3,
            marginTop: '8vw',
          }}
        >
          <Img
            fluid={data.freddie.childImageSharp.fluid}
            className="w-full self-start"
            css={{
              width: '100%',
              marginLeft: '8.5%',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />
          <VideoPlayer
            // label="Watch speaking demo"
            webroll={bgVideoColor}
            video={
              <iframe
                src="https://player.vimeo.com/video/259618922?autoplay=1&color=b4903a"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="Watch The Experience"
                allowFullScreen
                className="w-full h-full absolute top-0 left-0 bg-black"
              />
            }
            ratio={1080 / 1920}
            css={{ width: '60%', marginTop: '-10vw', marginLeft: '23%' }}
          />
        </AutoSlide>
        <AutoSlide
          right
          delay={800}
          css={{
            gridRow: 1,
            gridColumn: '3 / -2',
            zIndex: 2,
            marginTop: '13.5vw',
            padding: '4.5%',
            paddingLeft: '33%',
            background: `white url(${data.signature.childImageSharp.fixed.src}) center -2vw / 120% auto no-repeat`,
          }}
        >
          <h3
            className="font-display leading-none uppercase text-gray-900"
            css={{ maxWidth: '8em', fontSize: '3.3vw' }}
          >
            MEET FREDDIE RAVEL
          </h3>
          <p
            className="font-display leading-none uppercase text-gold-300"
            css={{
              maxWidth: '20em',
              margin: '1.2em 0',
              marginLeft: '-12%',
              fontSize: '1.8vw',
            }}
          >
            Grammy-nominated performer, communication expert and business
            visionary
          </p>
          <p
            className="pr-5 leading-relaxed text-gray-600"
            css={{ fontSize: '1vw' }}
          >
            With an unparalleled career that has consistently transcended the
            boundaries of music, culture and thought leadership, Freddie Ravel
            toured with Brazilian master Sergio Mendes, directed the legendary
            band that bridged black and white America - Earth, Wind and Fire,
            performed on the silver screen with the Queen of Pop - Madonna,
            rocked stadiums with Afro-Latin-Blues-Rock icon Carlos Santana,
            performed the Grammys with Prince, cut tracks with Kanye and led the
            teams behind J. Lo, Jimmy Kimmel and Lady GaGa to become the
            “Expert’s Expert” on multi-generational integration.
          </p>
          <p
            className="mt-6 pr-5 leading-relaxed text-gray-600"
            css={{ fontSize: '1vw' }}
          >
            As an author, Freddie’s published works with Deepak Chopra on how
            music and thought cannot exist without silence illuminated that the
            “pause between the notes” is essential for effective communication.
            Highlighting the power of listening - whether to clients, colleagues
            or the signals that nature sends us - would lead to an invitation
            from the family of Dr. Martin Luther King, Jr. to be a featured
            author alongside Maya Angelou, Stevie Wonder, Muhammad Ali and
            Robert Kennedy Jr. in the book, Open My Eyes, Open My Soul.
          </p>
          <p
            className="mt-6 pr-5 leading-relaxed text-gray-600"
            css={{ fontSize: '1vw' }}
          >
            Freddie would later be dubbed the “Keynote Maestro” by the City of
            Los Angeles for his groundbreaking Life In Tune™ system to “renew
            the national and international economy.” In constant demand to bring
            audiences in tune around the world, his clients include IBM, Toyota,
            NASA, Apple, Blue Cross Health, Google and Prudential Financial
            Services who call his “ideal balance of Entertainment and Content”
            essential for businesses and entrepreneurs to transform from
            dissonance to harmony.
          </p>
          <ButtonLink
            className="inline-flex mt-6 text-gray-900"
            icon={
              <svg
                viewBox="0 0 30 30"
                className="w-5 h-5 ml-3 -mr-2 fill-current"
              >
                <path d="M0 30V20h2v8h26v-8h2v10H0zm14.5-7L7 15.5 8.5 14l5.5 5.5V0h2v19.5l5.5-5.5 1.5 1.5-7.5 7.5h-1z" />
              </svg>
            }
          >
            Download one-sheet
          </ButtonLink>
        </AutoSlide>
      </div>
    </section>
    {/* <section className="h-screen"></section> */}
    <BookFreddie />
    <FooterGallery />
  </>
)

export default IndexPage
