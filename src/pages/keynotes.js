import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import SEO from '../components/SEO'
import Container from '../components/Container'
import ClientRaves from '../components/ClientRaves'
import BookFreddie from '../components/BookFreddie'
import FooterGallery from '../components/FooterGallery'
import ButtonLink from '../components/ButtonLink'
import VideoPlayer from '../components/VideoPlayer'
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
    freddie: file(relativePath: { eq: "freddie.png" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
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
    <SEO title="Keynotes" />
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
            label="Watch speaking demo"
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
          FEATURED KEYNOTE TOPICS
        </h3>

        <AutoSlide up className="mb-32">
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
              The Rhythm of Success
            </h3>
          </header>
          <div className="flex bg-white">
            <VideoPlayer
              className="flex-1 self-start"
              css={{
                transform: 'translate(-48px, 48px)',
                boxShadow: '0 5px 50px rgba(0, 0, 0, .4)',
              }}
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
              ratio={0.8}
            />
            <div className="flex-1 py-12 px-6">
              <div css={{ maxWidth: '42em' }}>
                <p className="mb-6 pr-5 leading-relaxed text-gray-600">
                  The Rhythm of Success is a one-of-a-kind program designed to
                  challenge and inspire organizations to discover their untapped
                  potential through the power of Active Listening. The format is
                  fast-paced, entertaining, and as the secrets of the world’s
                  undisputed international language of music are revealed, full
                  of surprises. In this multimedia, interactive “Keynote
                  Concert” experience, your audience will learn to:
                </p>
                <ul className="mb-6 ml-5 pr-5 leading-relaxed text-gray-600">
                  <li className="list-disc list-outside">
                    Enhance interpersonal and professional leadership skills
                  </li>
                  <li className="list-disc list-outside">Amplify engagement</li>
                  <li className="list-disc list-outside">
                    Clarify and SCORE desired goals and outcomes
                  </li>
                </ul>
                <p className="mb-6 pr-5 leading-relaxed text-gray-600">
                  No matter what kind of organization—from small companies to
                  large corporations—employees at all levels will tune up to a
                  better future by becoming more collaborative, productive and
                  ultimately, more profitable. This presentation is sure to open
                  or close your meeting on a dynamic high note.
                </p>
                <ButtonLink className="inline-flex text-gray-900">
                  BOOK THIS KEYNOTE
                </ButtonLink>
              </div>
            </div>
          </div>
        </AutoSlide>

        <AutoSlide up className="mb-32">
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
              THE MUSIC OF LEADERSHIP
            </h3>
          </header>
          <div className="flex bg-white">
            <div className="flex-1 py-12 px-6">
              <div css={{ maxWidth: '42em', marginLeft: 'auto' }}>
                <p className="mb-6 pr-5 leading-relaxed text-gray-600">
                  This presentation takes your audience on a deep dive into the
                  role of "melody" within music and its’ power as the central
                  message to bring life to your products and services. When
                  leaders "sing" a better future, inspiration resonates across
                  the entire company’s culture. The Music of Leadership will
                  reveal:
                </p>
                <ul className="mb-6 ml-5 pr-5 leading-relaxed text-gray-600">
                  <li className="list-disc list-outside">
                    How the strategic use of passion and purpose provide the
                    competitive edge to win.
                  </li>
                  <li className="list-disc list-outside">
                    Why a leader’s ultimate super-power is to step out of their
                    own head and get into their client’s shoes.
                  </li>
                  <li className="list-disc list-outside">
                    Why one’s personal purpose never gets heard unless it
                    ultimately serves others.
                  </li>
                </ul>
                <p className="mb-6 pr-5 leading-relaxed text-gray-600">
                  No matter what kind of organization—from small companies to
                  large corporations—employees at all levels will tune up to a
                  better future by becoming more collaborative, productive and
                  ultimately, more profitable. This presentation is sure to open
                  or close your meeting on a dynamic high note.
                </p>
                <ButtonLink className="inline-flex text-gray-900">
                  BOOK THIS KEYNOTE
                </ButtonLink>
              </div>
            </div>
            <VideoPlayer
              className="flex-1 self-start"
              css={{
                transform: 'translate(48px, 48px)',
                boxShadow: '0 5px 50px rgba(0, 0, 0, .4)',
              }}
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
              ratio={0.8}
            />
          </div>
        </AutoSlide>

        <AutoSlide up className="mb-32">
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
              RESOLVING DISRUPTION
            </h3>
          </header>
          <div className="flex bg-white">
            <VideoPlayer
              className="flex-1 self-start"
              css={{
                transform: 'translate(-48px, 48px)',
                boxShadow: '0 5px 50px rgba(0, 0, 0, .4)',
              }}
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
              ratio={0.8}
            />
            <div className="flex-1 py-12 px-6">
              <div css={{ maxWidth: '42em' }}>
                <p className="mb-6 pr-5 leading-relaxed text-gray-600">
                  With Disruption ever-present and increasing at lightning
                  speed, it’s easy for organizations to get out of tune and out
                  of sync. This interactive experience takes your audience into
                  what disruption actually sounds like and then, through
                  revealing tangible techniques to overcome adversity,
                  transforms dissonance to resolution. The stunning new
                  composition that is co-created with the audience reveals their
                  own wisdom and capability to discover surprising solutions
                  towards achieving their highest potential. Your teams and
                  organization will learn:
                </p>
                <ul className="mb-6 ml-5 pr-5 leading-relaxed text-gray-600">
                  <li className="list-disc list-outside">
                    What Disruption sounds like and more importantly, how to
                    resolve it.
                  </li>
                  <li className="list-disc list-outside">
                    How to get from out of tune to in tune.
                  </li>
                  <li className="list-disc list-outside">
                    The only way to manage change is to create change.
                  </li>
                </ul>
                <ButtonLink className="inline-flex text-gray-900">
                  BOOK THIS KEYNOTE
                </ButtonLink>
              </div>
            </div>
          </div>
        </AutoSlide>

        <AutoSlide up className="mb-32">
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
              Teamwork: The Power of
              <br />
              Human Harmonics
            </h3>
          </header>
          <div className="flex bg-white">
            <div className="flex-1 py-12 px-6">
              <div css={{ maxWidth: '42em', marginLeft: 'auto' }}>
                <p className="mb-6 pr-5 leading-relaxed text-gray-600">
                  Have you ever heard a great-sounding band or orchestra where
                  everyone is a soloist? It simply doesn’t exist. For over a
                  decade, the Gallup polls reveal that four out of five
                  employees are disengaged in their work, costing the U.S.
                  economy over $500 billion annually in lost revenue. Freddie
                  shares his personal stories of how minorities and women have
                  opened doors to his ongoing success: from directing the iconic
                  band that bridged black and white America, Earth, Wind and
                  Fire, writing with Dr. Martin Luther King’s daughter, Yolanda
                  King, alongside Muhammad Ali, Robert Kennedy Jr. and Maya
                  Angelou, playing the GRAMMY’s with Prince, recording with
                  Madonna and packing stadiums with Afro-Latin-Blues-Rock legend
                  Carlos Santana. Driving home the message that when we LISTEN
                  UP and embrace Diversity and Inclusion, our team of collective
                  Melodies, Harmonies and Rhythms achieve the ultimate SCORE—a
                  state where organizations gain the distinct advantage needed
                  in today’s hypercompetitive marketplace. Your organization
                  will discover:
                </p>
                <ul className="mb-6 ml-5 pr-5 leading-relaxed text-gray-600">
                  <li className="list-disc list-outside">
                    Music’s 3 KEYS to unlocking your potential.
                  </li>
                  <li className="list-disc list-outside">
                    How to immediately strengthen diversity and inclusion across
                    your culture.
                  </li>
                  <li className="list-disc list-outside">
                    Unparalleled insight into the power of the PAUSE within
                    music and daily life.
                  </li>
                </ul>
                <ButtonLink className="inline-flex text-gray-900">
                  BOOK THIS KEYNOTE
                </ButtonLink>
              </div>
            </div>
            <VideoPlayer
              className="flex-1 self-start"
              css={{
                transform: 'translate(48px, 48px)',
                boxShadow: '0 5px 50px rgba(0, 0, 0, .4)',
              }}
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
              ratio={0.9}
            />
          </div>
        </AutoSlide>

        <AutoSlide up className="mb-32">
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
              The “Keynote Maestro”
              <br />
              Your Master of Ceremonies
            </h3>
          </header>
          <div className="flex bg-white">
            <div className="flex-1 py-12 px-6">
              <div css={{ maxWidth: '39em', marginLeft: 'auto' }}>
                <p className="mb-6 pr-5 leading-relaxed text-gray-600">
                  Want to keep your meeting moving or add an extra spark to make
                  your event unforgettable? Freddie Ravel as your emcee is the
                  answer. He combines your business themes and customized music
                  to rev up the energy of general sessions throughout the day,
                  your multi-day meeting or your awards ceremony. Freddie
                  strongly believes in advance planning to ensure your event’s
                  success. As your Emcee, he’ll work with you prior to your
                  event to reveal, punctuate and energize your audience through
                  short bursts of music and entertainment for that perfect segue
                  to your next speaker or award presenter. Count on a
                  world-class approach to:
                </p>
                <ul className="mb-6 ml-5 pr-5 leading-relaxed text-gray-600">
                  <li className="list-disc list-outside">
                    Transform the mundane to the magnificent.
                  </li>
                  <li className="list-disc list-outside">
                    Collaboration with your team to reveal, punctuate and
                    energize your audience.
                  </li>
                  <li className="list-disc list-outside">
                    Provide the perfect segues to your next speaker, award
                    presenter and announcements.
                  </li>
                </ul>
                <p className="mb-6 pr-5 leading-relaxed text-gray-600">
                  In constant demand as a keynote presenter, performer and
                  emcee, Freddie’s high energy and powerful stage presence
                  guarantees a lively and highly successful event as he ties
                  your program into a perfect bow that further empowers, uplifts
                  and inspires your audience. He is your assurance that the
                  mundane transforms to magnificent and why so many clients
                  invite him back year after year!
                </p>
                <ButtonLink className="inline-flex text-gray-900">
                  Request Freddie
                </ButtonLink>
              </div>
            </div>
            <div className="flex-1 self-start p-12">
              <Img fluid={data.img1.childImageSharp.fluid} />
            </div>
          </div>
        </AutoSlide>

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
              WORKSHOPS / BREAKOUT SESSIONS
            </h3>
          </header>
          <div className="flex bg-white">
            <div className="flex-1 py-12 px-6">
              <div css={{ maxWidth: '39em', marginLeft: 'auto' }}>
                <p className="mb-6 pr-5 leading-relaxed text-gray-600">
                  The Rhythm of Success is a one-of-a-kind program designed to
                  challenge and inspire organizations to discover their untapped
                  potential through the power of Active Listening. The format is
                  fast-paced, entertaining, and as the secrets of the world’s
                  undisputed international language of music are revealed, full
                  of surprises. In this multimedia, interactive “Keynote
                  Concert” experience, your audience will learn to
                </p>
                <ButtonLink className="inline-flex text-gray-900">
                  INQUIRE FOR MORE INFO
                </ButtonLink>
              </div>
            </div>
            <div className="flex-1 self-start p-12">
              <Img fluid={data.img2.childImageSharp.fluid} />
            </div>
          </div>
        </AutoSlide>
      </Container>
    </div>
    <ClientRaves />
    <BookFreddie />
    <FooterGallery />
  </>
)

export default IndexPage
