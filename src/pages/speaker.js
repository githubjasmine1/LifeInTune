import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

import { media } from '../styles/tools'

import SEO from '../components/SEO'
import BookFreddie from '../components/BookFreddie'
import FooterGallery from '../components/FooterGallery'
import ButtonLink from '../components/ButtonLink'
import VideoPlayer from '../components/VideoPlayer'
import { AutoSlide, AutoFade } from '../components/Animated'

import bgVideoColor from '../assets/bg-video-color.mp4'
import litSignet from '../assets/lit-signet.png'

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
    tl2003Mlk: file(relativePath: { eq: "timeline/2003-mlk.png" }) {
      ...textContainerWide
    }
    tl1988Sergiomendes: file(
      relativePath: { eq: "timeline/1988-sergiomendes.png" }
    ) {
      ...textContainerWide
    }
    tl1990RavelAlbum1: file(
      relativePath: { eq: "timeline/1990-ravel-album1.png" }
    ) {
      ...textContainerWide
    }
    tl1995Chopra: file(relativePath: { eq: "timeline/1995-chopra.png" }) {
      ...textContainerWide
    }
    tl1995Earthwindfire: file(
      relativePath: { eq: "timeline/1995-earthwindfire.png" }
    ) {
      ...textContainerWide
    }
    tl1996EvitaFilm: file(
      relativePath: { eq: "timeline/1996-evita-film.png" }
    ) {
      ...textContainerWide
    }
    tl1996RavelAlbum2: file(
      relativePath: { eq: "timeline/1996-ravel-album2.png" }
    ) {
      ...textContainerWide
    }
    tl2001RavelAlbum3: file(
      relativePath: { eq: "timeline/2001-ravel-album3.png" }
    ) {
      ...textContainerWide
    }
    tl2001Top30chart: file(
      relativePath: { eq: "timeline/2001-top30chart.png" }
    ) {
      ...textContainerWide
    }
    tl2009Santanatour: file(
      relativePath: { eq: "timeline/2009-santanatour.png" }
    ) {
      ...textContainerWide
    }
    tl2010FreddieSantana: file(
      relativePath: { eq: "timeline/2010-freddie-santana.png" }
    ) {
      ...textContainerWide
    }
    tl2011Santana: file(relativePath: { eq: "timeline/2011-santana.png" }) {
      ...textContainerWide
    }
    tl2014RavelAlbum4: file(
      relativePath: { eq: "timeline/2014-ravel-album4.png" }
    ) {
      ...textContainerWide
    }
    tl2015DonMiguel: file(
      relativePath: { eq: "timeline/2015-don-miguel.png" }
    ) {
      ...textContainerWide
    }
    tl2019Lit: file(relativePath: { eq: "timeline/2019-LIT.png" }) {
      ...textContainerWide
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Speaker" />
    <section
      className="pt-10 pb-10 text-white"
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
            paddingBottom: '8%',
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
    <section
      className="relative z-0 px-20 pt-20 pb-10 text-white"
      css={{
        backgroundColor: '#1b1b1b',
        '.swiper-container': {
          overflow: 'visible !important',
        },
      }}
    >
      <div
        className="w-full h-px absolute left-0 bg-gray-600"
        css={{
          top: 'calc(20 * 4 / 16 * 1rem +  6 / 16 * 1rem)',
          zIndex: -1,
        }}
      ></div>
      <Swiper
        {...{
          freeMode: true,
          initialSlide: 1000,
          slidesPerView: 4,
          spaceBetween: 30,
          grabCursor: true,
        }}
      >
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            1988-90
          </div>
          <div
            className="w-full transition"
            css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
          >
            <Img fluid={data.tl1988Sergiomendes.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">Sergio Mendes</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            1990
          </div>
          <div
            className="w-full transition"
            css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
          >
            <Img fluid={data.tl1990RavelAlbum1.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              1st Solo Release: Midnight Passion on Verve 1990
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            1990-95
          </div>
          <div
            className="w-full transition"
            css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
          >
            <Img fluid={data.tl1995Earthwindfire.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Earth, Wind and Fire
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            1995
          </div>
          <div
            className="w-full transition"
            css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
          >
            <Img fluid={data.tl1995Chopra.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Deepak Chopra Seminars - "Life in Tune” Presentation debut
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            1996
          </div>
          <div
            className="w-full transition"
            css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
          >
            <Img fluid={data.tl1996RavelAlbum2.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              2nd Solo Release: Sol to Soul on Verve
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            1996
          </div>
          <div
            className="w-full transition"
            css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
          >
            <Img fluid={data.tl1996EvitaFilm.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Madonna - 1996 “Evita” Film
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2001
          </div>
          <div
            className="w-full transition"
            css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
          >
            <Img fluid={data.tl2001RavelAlbum3.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              3rd Solo Release: Freddie Ravel, Universal
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2001
          </div>
          <div
            className="w-full transition"
            css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
          >
            <Img fluid={data.tl2001Top30chart.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              #1 song in America on R&R Charts - Sunny Side Up 2001
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2003
          </div>
          <div
            className="w-full transition"
            css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
          >
            <Img fluid={data.tl2003Mlk.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Open my Eyes, Open my Soul
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2009
          </div>
          <div
            className="w-full transition"
            css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
          >
            <Img fluid={data.tl2009Santanatour.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">Santana World Tour</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2010
          </div>
          <div
            className="w-full transition"
            css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
          >
            <Img fluid={data.tl2010FreddieSantana.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">Santana World Tour</div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2011
          </div>
          <div
            className="w-full transition"
            css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
          >
            <Img fluid={data.tl2011Santana.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Santana’s Guitar Heaven
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2014
          </div>
          <div
            className="w-full transition"
            css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
          >
            <Img fluid={data.tl2014RavelAlbum4.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              4th Solo Release: If Music Could Speak
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            2015
          </div>
          <div
            className="w-full transition"
            css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
          >
            <Img fluid={data.tl2015DonMiguel.childImageSharp.fluid} />
            <div className="p-5 bg-white text-gray-600">
              Don Miguel Ruiz Collaborations
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="mb-4 rounded-full bg-gold-300"
            css={{ width: 13, height: 13 }}
          ></div>
          <div className="mb-4 font-display text-3xl text-gold-300 text-center">
            PRESENT
          </div>
          <div
            className="w-full transition"
            css={{ filter: 'grayscale(1)', ':hover': { filter: 'none' } }}
          >
            <div css={{ display: 'grid' }}>
              <Img
                fluid={data.tl2019Lit.childImageSharp.fluid}
                css={{ gridArea: '1 / 1 / 2 / 2' }}
              />
              <img
                src={litSignet}
                alt="LIT Logo"
                className="w-1/2 m-auto"
                css={{ gridArea: '1 / 1 / 2 / 2', zIndex: 1 }}
              />
            </div>
            <div className="p-5 bg-white text-gray-600">
              Life In Tune Corporate Training, Presentations, Workshops,
              Keynotes - 81 countries and counting!
            </div>
          </div>
        </div>
      </Swiper>
    </section>
    <BookFreddie />
    <FooterGallery />
  </>
)

export default IndexPage
