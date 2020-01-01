import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-css'

import SEO from '../components/SEO'
import Container from '../components/Container'
import BookFreddie from '../components/BookFreddie'
import FooterGallery from '../components/FooterGallery'
import { AutoSlide, AutoFade } from '../components/Animated'

import aia from '../assets/logos/aia.svg'
import anz from '../assets/logos/anz.svg'
import bluecross from '../assets/logos/bluecross.svg'
import cox from '../assets/logos/cox.svg'
import cvent from '../assets/logos/cvent.svg'
import ibm from '../assets/logos/ibm.svg'
import jdpower from '../assets/logos/jdpower.svg'
import nasa from '../assets/logos/nasa.svg'
import reuters from '../assets/logos/reuters.svg'
import toyota from '../assets/logos/toyota.svg'
import twitter from '../assets/logos/twitter.svg'
import walmart from '../assets/logos/walmart.svg'

export const query = graphql`
  query {
    waves: file(relativePath: { eq: "gold-wave.png" }) {
      childImageSharp {
        fluid(maxWidth: 2500, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    hero: file(relativePath: { eq: "freddie-tony-hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    testimonialsBg: file(relativePath: { eq: "testimonials-bg.png" }) {
      ...windowWide
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Buzz" />
    <section className="pt-10 text-white" css={{ backgroundColor: '#1b1b1b' }}>
      <div
        css={{
          display: 'grid',
          '--space': '13vw',
          gridTemplateColumns: 'var(--space) 1fr var(--space)',
          // [media.laptop]: {
          //   '--space': '13vw',
          //   gridTemplateColumns: 'var(--space) 1fr 1fr 1.5fr var(--space)',
          // },
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
            gridColumn: '2 / -2',
            zIndex: 3,
            marginTop: '13.5vw',
          }}
        >
          <Img fluid={data.hero.childImageSharp.fluid} />
        </AutoSlide>
      </div>
    </section>
    <div className="pb-20" css={{ backgroundColor: '#1b1b1b' }}>
      <Container>
        <h3
          className="mx-auto font-display leading-none text-white uppercase text-center"
          css={{ fontSize: '3.5vw', paddingTop: '7vw' }}
        >
          BUZZ & Accolades
        </h3>
      </Container>
    </div>
    <section
      className="flex flex-col items-center relative py-20 bg-white"
      css={{ paddingBottom: '17vw', background: '#f4f4f4' }}
    >
      <Img
        fluid={data.testimonialsBg.childImageSharp.fluid}
        className="w-full h-full top-0 left-0"
        imgStyle={{ objectFit: 'contain', objectPosition: 'bottom' }}
        css={{ position: 'absolute !important' }}
      />
      <Container>
        <AutoFade>
          <h3 className="relative font-display font-hairline text-3xl leading-tight text-center text-gray-700 uppercase">
            Client Raves and Reviews
          </h3>
        </AutoFade>
        <Masonry
          breakpointCols={{
            default: 4,
            1200: 3,
            1024: 2,
            500: 1,
          }}
          columnClassName=""
          className="flex -ml-5 mt-12 relative"
        >
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={cvent} alt="" className="block w-24 opacity-50" />
            <p className="mt-6">
              “The energy level was off the hook!
              <br />
              <br />
              "He did a terrific job weaving our message into his presentation.”
            </p>
            <p className="mt-5 text-sm">cVent</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={anz} alt="" className="block w-24 opacity-50" />
            <p className="mt-6">
              “He made it so relevant and so real for out audience.”
            </p>
            <p className="mt-5 text-sm">Australia New Zealand Bank</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={bluecross} alt="" className="block w-32 opacity-50" />
            <p className="mt-6">
              “Transformative, Collaborative and Effective.”
            </p>
            <p className="mt-5 text-sm">Blue Cross/Blue Shield</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={cox} alt="" className="block w-32 opacity-50" />
            <p className="mt-6">
              “Spellbinding stories to connect points of real importance to our
              culture”
            </p>
            <p className="mt-5 text-sm">CoxMedia</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={ibm} alt="" className="block w-20 opacity-50" />
            <p className="mt-6">
              “By far the best motivational performance we have seen”
            </p>
            <p className="mt-5 text-sm">IBM</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={toyota} alt="" className="block w-16 opacity-50" />
            <p className="mt-6">“Fantastic and Profound”</p>
            <p className="mt-5 text-sm">Toyota Motor Sales, USA</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={twitter} alt="" className="block w-12 opacity-50" />
            <p className="mt-6">
              “His masterful mapping of music to our everyday cadence was
              AMAZING!”
            </p>
            <p className="mt-5 text-sm">Twitter</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={nasa} alt="" className="block w-16 opacity-50" />
            <p className="mt-6">
              “Dazzling and Phenomenal - we are grateful for his exceptional
              legacy.”
            </p>
            <p className="mt-5 text-sm">NASA</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={walmart} alt="" className="block w-32 opacity-50" />
            <p className="mt-6">"His incredible talent delivers”</p>
            <p className="mt-5 text-sm">WalMart</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={jdpower} alt="" className="block w-16 opacity-50" />
            <p className="mt-6">
              “He spoke to our employees as though he were one of us…. people
              walked out of the room electrified.”
            </p>
            <p className="mt-5 text-sm">
              Bangor Savings Bank
              <br />
              Voted # 1 by JD Powers
            </p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={aia} alt="" className="block w-16 opacity-50" />
            <p className="mt-6">
              “He rocked our conference with relevant messages delivered
              magnificently.”
            </p>
            <p className="mt-5 text-sm">AIA</p>
          </AutoFade>
          <AutoFade
            as="li"
            className="flex flex-col mt-5 ml-5 px-5 py-10 bg-white text-gray-900"
            css={{ display: 'flex' }}
          >
            <img src={reuters} alt="" className="block w-32 opacity-50" />
            <p className="mt-6">"A Fantastic Experience”</p>
            <p className="mt-5 text-sm">Reuters</p>
          </AutoFade>
        </Masonry>
      </Container>
    </section>
    <BookFreddie />
    <FooterGallery />
  </>
)

export default IndexPage
