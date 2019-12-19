import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/SEO'
import Container from '../components/Container'
import ClientRaves from '../components/ClientRaves'
import BookFreddie from '../components/BookFreddie'
import FooterGallery from '../components/FooterGallery'
import MissionRings from '../components/MissionRings'
import VideoPlayer from '../components/VideoPlayer'
import ButtonLink from '../components/ButtonLink'
import { AutoSlide, AutoFade } from '../components/Animated'

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
    hero: file(relativePath: { eq: "freddie-tony-hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    img1: file(relativePath: { eq: "keynotes-img-1.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    img2: file(relativePath: { eq: "keynotes-img-2.png" }) {
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
    <ClientRaves />
    <BookFreddie />
    <FooterGallery />
  </>
)

export default IndexPage
