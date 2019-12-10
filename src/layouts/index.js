import React from 'react'

// import { rem } from '../styles/tools'

import useScrolledBelow from '../hooks/useScrolledBelow'

import Head from '../components/Head'
import Container from '../components/Container'
import Link from '../components/Link'
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
        className="py-5 text-white transition-slow ease-out"
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
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-500 transition-fast"
              >
                Keynotes
              </Link>
              <Link
                to="/"
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-500 transition-fast"
              >
                Speaker
              </Link>
              <Link
                to="/"
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-500 transition-fast"
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
            <div className="flex absolute" css={{ top: 0, left: '100%' }}>
              <Link
                to="/"
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-500 transition-fast"
              >
                Buzz
              </Link>
              <Link
                to="/"
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-500 transition-fast"
              >
                Planning
              </Link>
              <Link
                to="/"
                className="px-2 lg:px-5 xl:px-10 text-sm uppercase hover:text-gold-500 transition-fast"
              >
                Booking
              </Link>
            </div>
          </div>
        </Container>
      </header>
    </AutoFade>
  )
}

// const Footer = props => (
//   <footer
//     css={{ padding: `${rem(100)} 0`, color: '#fff', backgroundColor: '#000' }}
//     {...props}
//   >
//     <Container css={{ display: 'flex' }}>
//       <Link to="/">Logo</Link>
//       <span css={{ marginLeft: 'auto' }}>© {new Date().getFullYear()}</span>
//     </Container>
//   </footer>
// )

const Layout = ({ children }) => (
  <div css={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Head />
    <Navbar />
    <main css={{ flexGrow: 1 }}>{children}</main>
    {/* <Footer /> */}
  </div>
)

export default Layout
