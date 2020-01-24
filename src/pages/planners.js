import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { media } from '../styles/tools'

import SEO from '../components/SEO'
import BookFreddie from '../components/BookFreddie'
import FooterGallery from '../components/FooterGallery'
import ButtonLink from '../components/ButtonLink'
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
          '--space': '20px',
          gridTemplateColumns: 'var(--space) 1fr var(--space)',
          [media.laptop]: {
            '--space': '13vw',
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
            gridColumn: '2 / -2',
            zIndex: 3,
            marginTop: '13.5vw',
          }}
        >
          <header className="flex justify-center px-6 py-6 lg:py-12 bg-black">
            <h3
              className="relative font-display font-hairline text-lg lg:text-3xl text-gold-500 leading-tight text-center uppercase"
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
            <div className="flex-1 py-8 lg:py-12 px-6">
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
                    className="mt-5 md:mt-12 text-gray-900"
                    css={{ [media.max.tablet]: { fontSize: 10 } }}
                    icon={
                      <svg
                        viewBox="0 0 30 30"
                        className="hidden md:block w-5 h-5 ml-3 -mr-2 fill-current"
                      >
                        <path d="M0 30V20h2v8h26v-8h2v10H0zm14.5-7L7 15.5 8.5 14l5.5 5.5V0h2v19.5l5.5-5.5 1.5 1.5-7.5 7.5h-1z" />
                      </svg>
                    }
                  >
                    Download one-sheet
                  </ButtonLink>
                  <ButtonLink
                    className="mt-3 md:mt-6 text-gray-900"
                    css={{ [media.max.tablet]: { fontSize: 10 } }}
                    icon={
                      <svg
                        viewBox="0 0 30 30"
                        className="hidden md:block w-5 h-5 ml-3 -mr-2 fill-current"
                      >
                        <path d="M0 30V20h2v8h26v-8h2v10H0zm14.5-7L7 15.5 8.5 14l5.5 5.5V0h2v19.5l5.5-5.5 1.5 1.5-7.5 7.5h-1z" />
                      </svg>
                    }
                  >
                    Pre-Event Questionnaire
                  </ButtonLink>
                  <ButtonLink
                    className="mt-3 md:mt-6 text-gray-900"
                    css={{ [media.max.tablet]: { fontSize: 10 } }}
                    icon={
                      <svg
                        viewBox="0 0 30 30"
                        className="hidden md:block w-5 h-5 ml-3 -mr-2 fill-current"
                      >
                        <path d="M0 30V20h2v8h26v-8h2v10H0zm14.5-7L7 15.5 8.5 14l5.5 5.5V0h2v19.5l5.5-5.5 1.5 1.5-7.5 7.5h-1z" />
                      </svg>
                    }
                  >
                    A/V Requirements
                  </ButtonLink>
                  <ButtonLink
                    className="mt-3 md:mt-6 text-gray-900"
                    css={{ [media.max.tablet]: { fontSize: 10 } }}
                    icon={
                      <svg
                        viewBox="0 0 30 30"
                        className="hidden md:block w-5 h-5 ml-3 -mr-2 fill-current"
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
            <div className="hidden md:block flex-1 self-start p-12">
              <Img fluid={data.planners.childImageSharp.fluid} />
            </div>
          </div>
        </AutoSlide>
      </div>
    </section>
    <BookFreddie />
    <FooterGallery />
  </>
)

export default IndexPage
