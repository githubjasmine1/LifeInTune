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
    planners: file(relativePath: { eq: "planners.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <>
    <SEO title="Planners" />
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
          />
        </AutoSlide>
      </div>
    </section>
    <div className="pb-20" css={{ backgroundColor: '#1b1b1b' }}>
      <Container>
        <h3
          className="mx-auto font-display leading-none text-white uppercase text-center"
          css={{ fontSize: '3.5vw', padding: '7vw 0', maxWidth: '20em' }}
        >
          TRANSFORM YOUR EVENT
        </h3>

        <AutoSlide up>
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
              Resources for Meeting Planners
            </h3>
          </header>
          <div className="flex bg-white">
            <div className="flex-1 py-12 px-6">
              <div css={{ maxWidth: '39em', marginLeft: 'auto' }}>
                <p className="mb-6 pr-5 leading-relaxed text-gray-600">
                  Meeting Planners engage Freddie and his team in the conference
                  planning process to help design and incorporate their
                  objectives into an exciting, interactive and energizing event.
                  Serving for over two decades as an international Keynote
                  Presenter and Emcee, coupled with an uncanny ability to pivot,
                  adapt and deliver the client’s theme, vision and objectives,
                  Freddie delivers in English or Spanish to uplift your audience
                  to success.
                </p>
                <div css={{ maxWidth: 460 }}>
                  <ButtonLink
                    className="mt-12 text-gray-900"
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
                  <ButtonLink
                    className="mt-6 text-gray-900"
                    icon={
                      <svg
                        viewBox="0 0 30 30"
                        className="w-5 h-5 ml-3 -mr-2 fill-current"
                      >
                        <path d="M0 30V20h2v8h26v-8h2v10H0zm14.5-7L7 15.5 8.5 14l5.5 5.5V0h2v19.5l5.5-5.5 1.5 1.5-7.5 7.5h-1z" />
                      </svg>
                    }
                  >
                    Pre-Event Questionnaire
                  </ButtonLink>
                  <ButtonLink
                    className="mt-6 text-gray-900"
                    icon={
                      <svg
                        viewBox="0 0 30 30"
                        className="w-5 h-5 ml-3 -mr-2 fill-current"
                      >
                        <path d="M0 30V20h2v8h26v-8h2v10H0zm14.5-7L7 15.5 8.5 14l5.5 5.5V0h2v19.5l5.5-5.5 1.5 1.5-7.5 7.5h-1z" />
                      </svg>
                    }
                  >
                    A/V Requirements
                  </ButtonLink>
                  <ButtonLink
                    className="mt-6 text-gray-900"
                    icon={
                      <svg
                        viewBox="0 0 30 30"
                        className="w-5 h-5 ml-3 -mr-2 fill-current"
                      >
                        <path d="M0 30V20h2v8h26v-8h2v10H0zm14.5-7L7 15.5 8.5 14l5.5 5.5V0h2v19.5l5.5-5.5 1.5 1.5-7.5 7.5h-1z" />
                      </svg>
                    }
                  >
                    Download photos
                  </ButtonLink>
                </div>
              </div>
            </div>
            <div className="flex-1 self-start p-12">
              <Img fluid={data.planners.childImageSharp.fluid} />
            </div>
          </div>
        </AutoSlide>
      </Container>
    </div>
    <BookFreddie />
    <FooterGallery />
  </>
)

export default IndexPage
