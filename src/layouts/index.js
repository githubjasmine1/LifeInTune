import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

// import { rem } from '../styles/tools'

import useScrolledBelow from '../hooks/useScrolledBelow'

import Head from '../components/Head'
import Container from '../components/Container'
import Link from '../components/Link'
import ButtonLink from '../components/ButtonLink'
import { AutoFade } from '../components/Animated'

const Navbar = props => {
  const isBelow = useScrolledBelow(60)

  return (
    <AutoFade
      delay={1000}
      duration={1500}
      className="w-full z-50 fixed top-0 left-0"
    >
      <header
        className="py-5 font-display font-hairline text-white transition-slow ease-out"
        style={{
          paddingTop: 48,
          transform: isBelow ? 'translateY(-28px)' : 'none',
        }}
        {...props}
      >
        <div
          className="w-full h-full absolute top-0 left-0 transition-slow ease-out"
          css={{ backgroundColor: 'rgba(26, 26, 26, .8)' }}
          style={{ opacity: isBelow ? 1 : 0 }}
        ></div>
        <Container
          as="nav"
          className="flex justify-center items-center"
          css={{ lineHeight: '50px' }}
        >
          <div className="relative">
            <div className="flex absolute" css={{ top: 0, right: '100%' }}>
              <Link
                to="/"
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-300 transition-fast"
              >
                Keynotes
              </Link>
              <Link
                to="/"
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-300 transition-fast"
              >
                Speaker
              </Link>
              <Link
                to="/"
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-300 transition-fast"
              >
                Mission
              </Link>
            </div>
            <Link
              to="/"
              className="block px-2 font-hairline text-2xl uppercase transition-slow ease-out"
              css={{
                backgroundImage:
                  'linear-gradient(to right, #91742d 10%, #fffea6 49%, #91742d 94%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              style={{
                opacity: isBelow ? 1 : 0,
                transform: isBelow ? 'none' : 'scale(.9)',
              }}
            >
              LIFE IN TUNE
            </Link>
            <div
              className="flex items-center absolute"
              css={{ top: 0, left: '100%' }}
            >
              <Link
                to="/"
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-300 transition-fast"
              >
                Buzz
              </Link>
              <Link
                to="/"
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-300 transition-fast"
              >
                Planning
              </Link>
              <div className="px-2 lg:px-5 xl:px-10">
                <ButtonLink to="/">Booking</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </header>
    </AutoFade>
  )
}

const Footer = props => {
  const data = useStaticQuery(graphql`
    {
      goldLogo: file(relativePath: { eq: "gold-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <footer
      className="py-20 text-white"
      css={{ backgroundColor: '#0a0a0a' }}
      {...props}
    >
      <Container
        css={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr .5fr .5fr',
          gridGap: 32,
        }}
      >
        <div className="flex flex-col items-center">
          <Img
            fluid={data.goldLogo.childImageSharp.fluid}
            css={{ width: 150 }}
          />
          <p className="mt-5 text-xs text-gray-600 text-center">
            ©2019 All Right Reserved.
            <br />
            Life In Tune™ with Freddie Ravel.
          </p>
        </div>
        <div className="">
          <p css={{ maxWidth: '30em' }}>
            Freddie Ravel Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ligula ullamcorper malesuada proin libero nunc consequat
            interdum varius.
          </p>
          <Link
            out
            href="https://www.google.pl/maps/place/22287+Mulholland+Hwy+%23516,+Calabasas,+CA+91302,+Stany+Zjednoczone/@34.1485337,-118.6140125,13.84z/data=!4m5!3m4!1s0x80c29ee517aca377:0x493574b19ff5cd59!8m2!3d34.1468839!4d-118.6130005"
            className="flex items-start mt-5 hover:text-gold-300 transition"
          >
            <svg
              viewBox="0 0 34 26.18"
              className="w-4 h-4 mt-1 mr-3 stroke-current"
            >
              <g fill="none" strokeWidth="2">
                <path
                  strokeMiterlimit="10"
                  d="M2.48 1h29.04c.817 0 1.48.663 1.48 1.48V23.7a1.48 1.48 0 01-1.48 1.48H2.48A1.48 1.48 0 011 23.7V2.48C1 1.663 1.663 1 2.48 1z"
                ></path>
                <path
                  strokeLinejoin="round"
                  d="M32.44 1.83L21.53 13.54a6.27 6.27 0 01-9.07 0L1.56 1.84"
                ></path>
                <path
                  strokeLinejoin="round"
                  d="M23.19 11.75L32.15 24.51"
                ></path>
                <path strokeLinejoin="round" d="M10.98 11.88L1.7 24.51"></path>
              </g>
            </svg>
            22287 Mulholland Hwy Suite 516
            <br />
            Calabasas, CA 91302 USA
          </Link>
          <Link
            href="tel:+18572673669"
            className="flex items-start mt-5 hover:text-gold-300 transition"
          >
            <svg
              viewBox="0 0 30.927 36.025"
              className="w-4 h-4 mt-1 mr-3 stroke-current"
            >
              <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.85 24.889c1-.09 2.95-1.92 4-2a4.003 4.003 0 012.78.8l2.68 2 1.61 1.28a2.52 2.52 0 01.43 3.62l-3.11 4a1.12 1.12 0 01-1 .43C11.74 33.809 1 22.759 1 9.339c0-2.369.337-4.726 1-7a.66.66 0 01.5-.45l5.91-.83a2.63 2.63 0 013.12 2l.39 1.99.65 3.26c.193.96.003 1.958-.53 2.78-.54.84-3.09 1.68-3.64 2.53h0a19.39 19.39 0 009.45 11.43v-.16z"
              ></path>
            </svg>
            +1-857-267-3669
          </Link>
        </div>
        <ul className="">
          <li>
            <Link to="/" className="hover:text-gold-300 transition">
              Home
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/" className="hover:text-gold-300 transition">
              Keynotes
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/" className="hover:text-gold-300 transition">
              Speaker
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/" className="hover:text-gold-300 transition">
              Mission
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/" className="hover:text-gold-300 transition">
              Buzz
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/" className="hover:text-gold-300 transition">
              Planning
            </Link>
          </li>
        </ul>
        <div className="">
          <h3 className="text-gold-500">Social Media</h3>
          <ul className="mt-2">
            <li>
              <Link
                out
                href="http://example.com"
                className="hover:text-gold-300 transition"
              >
                Linkedin
              </Link>
            </li>
            <li className="mt-2">
              <Link
                out
                href="http://example.com"
                className="hover:text-gold-300 transition"
              >
                Twitter
              </Link>
            </li>
            <li className="mt-2">
              <Link
                out
                href="http://example.com"
                className="hover:text-gold-300 transition"
              >
                Instagram
              </Link>
            </li>
            <li className="mt-2">
              <Link
                out
                href="http://example.com"
                className="hover:text-gold-300 transition"
              >
                Facebook
              </Link>
            </li>
            <li className="mt-2">
              <Link
                out
                href="http://example.com"
                className="hover:text-gold-300 transition"
              >
                YouTube
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

const Layout = ({ children }) => (
  <div css={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Head />
    <Navbar />
    <main css={{ flexGrow: 1 }}>{children}</main>
    <Footer />
  </div>
)

export default Layout
