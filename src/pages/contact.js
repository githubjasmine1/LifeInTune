import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/SEO'
import { AutoSlide, AutoFade } from '../components/Animated'

export const query = graphql`
  query {
    waves: file(relativePath: { eq: "gold-wave.png" }) {
      childImageSharp {
        fluid(maxWidth: 2500, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    contact: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Contact" />
    <section
      className="pt-10 pb-20 text-white"
      css={{ backgroundColor: '#1b1b1b' }}
    >
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
          <header className="flex justify-center px-6 py-12 bg-black">
            <h3
              className="relative font-display font-hairline text-3xl text-gold-500 leading-tight text-center uppercase"
              css={{
                backgroundImage:
                  'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Inspire and Transform Your Audience
            </h3>
          </header>
          <div className="flex -m-3 p-10 text-gray-900 bg-white">
            <div className="w-1/3 m-3">
              <p css={{ maxWidth: '16em' }}>
                To Contact or Book Freddie, send a message or contact:
              </p>
              <p className="mt-5">
                Freddie Ravel
                <br />
                22287 Mulholland Hwy Suite 516
                <br />
                Calabasas, CA 91302 USA
              </p>
              <a className="block mt-5" href="tel:1-857-267-3669">
                Phone: 1-857-267-3669
              </a>
              <Img
                fluid={data.contact.childImageSharp.fluid}
                className="mt-10"
              />
            </div>
            <div className="w-2/3 m-3"></div>
          </div>
        </AutoSlide>
      </div>
    </section>
  </>
)

export default IndexPage
