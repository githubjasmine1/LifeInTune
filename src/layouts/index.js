import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import useScrolledBelow from '../hooks/useScrolledBelow'

import Head from '../components/Head'
import Container from '../components/Container'
import Link from '../components/Link'
import ButtonLink from '../components/ButtonLink'
import Logo from '../components/Logo'
import { AutoFade } from '../components/Animated'

const Navbar = props => {
  const isBelow = useScrolledBelow(30)

  return (
    <AutoFade duration={1500} className="w-full z-40 fixed top-0 left-0">
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
                to="/keynotes"
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-300 transition-fast"
                activeClassName="text-gold-300"
              >
                Keynotes
              </Link>
              <Link
                to="/speaker"
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-300 transition-fast"
                activeClassName="text-gold-300"
              >
                Speaker
              </Link>
              <Link
                to="/mission"
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-300 transition-fast"
                activeClassName="text-gold-300"
              >
                Mission
              </Link>
            </div>
            <Link
              to="/"
              className="block px-2"
              css={{
                display: 'grid',
                gridTemplate: '"center" 1fr  / 1fr',
                justifyItems: 'center',
              }}
            >
              <svg
                viewBox="0 0 330 17.6"
                className="transition-slow ease-out"
                css={{ gridArea: 'center', width: 260, height: 50 }}
                style={{
                  opacity: isBelow ? 1 : 0,
                  visibility: isBelow ? 'visible' : 'hidden',
                  transform: isBelow ? 'none' : 'scale(.9)',
                }}
              >
                <linearGradient
                  id="a"
                  x1="0"
                  x2="300"
                  y1="3"
                  y2="3"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".2" stopColor="#d6b65f" />
                  <stop offset=".49" stopColor="#fffea6" />
                  <stop offset=".94" stopColor="#91742d" />
                </linearGradient>
                <path
                  fill="url(#a)"
                  d="M28.5 15h-26V1c.1-.5-.3-.9-.8-1H1a1 1 0 00-1 .8v15.5c-.1.5.3.9.8 1h27.7c.5.1.9-.3 1-.8V16c.1-.5-.3-.9-.8-1h-.2zm8.3-15h.5c.5 0 1 .4 1 1v15.3c0 .5-.4 1-1 1h-.5a1 1 0 01-1-1V1c0-.5.5-1 1-1zm33.9 0H43.6c-.5-.1-.9.3-1 .8v15.5c-.1.5.3.9.8 1h.7c.5.1.9-.3 1-.8v-6.4h24.1c.5.1.9-.3 1-.8v-.5c.1-.5-.3-.9-.8-1H45.1V2.3h25.6c.5 0 1-.3 1-.8V1c0-.5-.3-1-.8-1h-.2zm33.7 0H77.3c-.5-.1-.9.3-1 .8v15.5c-.1.5.3.9.8 1h27.3c.5.1.9-.3 1-.8V16c0-.5-.3-1-.8-1H78.8v-5H103c.5 0 1-.3 1-.8V8.6c0-.5-.3-1-.8-1H78.8V2.3h25.6c.5.1.9-.3 1-.8V1c.1-.5-.3-.9-.8-1h-.2zM298 2.3c.5 0 1-.3 1-.8V1c0-.5-.3-1-.8-1h-27.3c-.5-.1-.9.3-1 .8v15.5c-.1.5.3.9.8 1H298c.5 0 1-.3 1-.8V16c0-.5-.3-1-.9-1H272.4v-5h24.1c.5 0 1-.3 1-.8V8.6c.1-.5-.3-.9-.8-1h-24.3V2.3H298zM202.4 0h-27.5c-.5-.1-.9.3-1 .8v.5c-.1.5.3.9.8 1H187v14c-.1.5.3.9.8 1h.7c.5.1.9-.3 1-.8V2.3h13c.5.1.9-.3 1-.8V1c.1-.5-.3-.9-.8-1h-.3zm28.8 0h-.5c-.5-.1-.9.3-1 .8v7.8c0 4.2-3.4 6.6-9.4 6.6h-.8c-6.1 0-9.4-2.3-9.4-6.6V1c.1-.5-.3-.9-.8-1h-.7c-.5-.1-.9.3-1 .8v7.8c0 5.8 4.1 8.9 11.8 8.9h.8c7.8 0 11.9-3.1 11.9-8.9V1c.1-.5-.3-.9-.9-1 .1 0 .1 0 0 0zm33.4 0h-.5c-.5-.1-.9.3-1 .8V14.1L245.3 3.8 238.8 0h-1.3c-.5-.1-.9.3-1 .8v15.5c-.1.5.3.9.8 1h.7c.5.1.9-.3 1-.8V3.2l11.6 6.7 12.5 7.2 1 .2h.5c.5.1.9-.3 1-.8V1c.1-.5-.3-.9-.8-1h-.2zM157.1 0h-.5c-.5-.1-.9.3-1 .8V14.1L137.8 3.8 131.3 0l-.3-.1h-1c-.5-.1-.9.3-1 .8v15.5c-.1.5.3.9.8 1h.7c.5.1.9-.3 1-.8V3.2l11.6 6.7 12.5 7.2 1 .2h.5c.5.1.9-.3 1-.8V1c.1-.5-.3-.9-.8-1h-.2zm-33.9 0h.5c.5 0 1 .4 1 1v15.3c0 .5-.4 1-1 1h-.5a1 1 0 01-1-1V1c0-.5.5-1 1-1zm192.3.7v.7c0 .2-.1.4-.3.4H310.3v6.4c0 .2-.1.4-.3.4h-1c-.2 0-.4-.1-.4-.3V1.8h-4.8c-.2 0-.4-.1-.4-.3V.7c0-.2.1-.4.3-.4H315c.2 0 .4.1.5.3v.1zm14.5 0v7.5c0 .2-.1.4-.3.4h-.9c-.2 0-.4-.1-.4-.3v-6L324 6.7l-.6.2c-.2 0-.4 0-.6-.2l-4.4-4.3v5.9c0 .2-.1.4-.3.4h-.9c-.2 0-.4-.1-.4-.3V.7c0-.2.1-.4.3-.4h.9c.2 0 .5 0 .7.2l4.7 4.6 4.7-4.6c.2-.2.4-.2.7-.2h.8c.2-.1.4.1.4.4 0-.1 0 0 0 0z"
                />
              </svg>
              <Logo
                className="absolute hover:text-gold-300 transition-slow ease-out"
                css={{
                  gridArea: 'center',
                  width: 150,
                  left: 'calc(50% - 75px)',
                  marginTop: -24,
                }}
                style={{
                  opacity: isBelow ? 0 : 1,
                  visibility: isBelow ? 'hidden' : 'visible',
                  transform: isBelow ? 'scale(1.1) translateY(-25%)' : 'none',
                }}
              />
            </Link>
            <div
              className="flex items-center absolute"
              css={{ top: 0, left: '100%' }}
            >
              <Link
                to="/buzz"
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-300 transition-fast"
                activeClassName="text-gold-300"
              >
                Buzz
              </Link>
              <Link
                to="/planners"
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-300 transition-fast"
                activeClassName="text-gold-300"
              >
                Planners
              </Link>
              <div className="px-2 lg:px-5 xl:px-10">
                <ButtonLink to="/contact">Booking</ButtonLink>
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
      className="relative py-20 text-white"
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
            <Link to="/keynotes" className="hover:text-gold-300 transition">
              Keynotes
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/speaker" className="hover:text-gold-300 transition">
              Speaker
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/mission" className="hover:text-gold-300 transition">
              Mission
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/buzz" className="hover:text-gold-300 transition">
              Buzz
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/planners" className="hover:text-gold-300 transition">
              Planners
            </Link>
          </li>
        </ul>
        <div className="">
          <h3 className="text-gold-500">Social Media</h3>
          <ul className="mt-2">
            <li>
              <Link
                out
                href="http://www.linkedin.com/in/freddieravel"
                className="flex items-center hover:text-gold-300 transition"
              >
                <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                </svg>
                Linkedin
              </Link>
            </li>
            <li className="mt-2">
              <Link
                out
                href="http://twitter.com/freddieravel"
                className="flex items-center hover:text-gold-300 transition"
              >
                <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                </svg>
                Twitter
              </Link>
            </li>
            <li className="mt-2">
              <Link
                out
                href="https://www.instagram.com/freddieravel/"
                className="flex items-center hover:text-gold-300 transition"
              >
                <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
                Instagram
              </Link>
            </li>
            <li className="mt-2">
              <Link
                out
                href="http://www.facebook.com/pages/Freddie-Ravel/63497511550"
                className="flex items-center hover:text-gold-300 transition"
              >
                <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                </svg>
                Facebook
              </Link>
            </li>
            <li className="mt-2">
              <Link
                out
                href="https://www.youtube.com/user/maximjasmine"
                className="flex items-center hover:text-gold-300 transition"
              >
                <svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
                  <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
                </svg>
                YouTube
              </Link>
            </li>
          </ul>
        </div>
        <Link
          out
          href="https://advictorem.agency"
          className="block absolute right-0 bottom-0 mr-6 mb-5 text-gray-700 hover:text-white transition"
          css={{ width: 28, height: 28 }}
        >
          <svg viewBox="0 0 153.4 128.1" fill="currentColor">
            <title>Design by Ad Victorem</title>
            <polygon points="24.8,9.5 0,9.5 59,128.1 71.9,102.3"></polygon>
            <path d="M112.7,46.8c2.7-0.6,5.3-1.3,7.6-2.1c7.1-2.3,12.7-5.1,17.1-8.1C157.4,22.9,153,0.8,153,0.8s-14.2,28.8-51.4,3.9C76.5-8.3,59.3,9.6,59.3,9.6l28,55c1.4-2.5,3.2-4.6,5-6.7C99.1,49.9,110.2,47.4,112.7,46.8z"></path>
          </svg>
        </Link>
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
