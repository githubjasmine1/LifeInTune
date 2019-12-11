import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const FooterGallery = () => {
  const data = useStaticQuery(graphql`
    {
      freddiePitbull: file(relativePath: { eq: "freddie-pitbull.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      freddieTony: file(relativePath: { eq: "freddie-tony.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ravelConcert: file(relativePath: { eq: "ravel-concert.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ravelKeynote: file(relativePath: { eq: "ravel-keynote.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      ravelSpeaking: file(relativePath: { eq: "ravel-speaking.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <section
      className="flex"
      css={{
        '> *': {
          filter: 'grayscale(1)',
          willChange: 'filter',
          ':hover': { filter: 'none' },
        },
      }}
    >
      <Img
        fluid={data.freddieTony.childImageSharp.fluid}
        className="flex-1 transition"
      />
      <Img
        fluid={data.ravelConcert.childImageSharp.fluid}
        className="flex-1 transition"
      />
      <Img
        fluid={data.ravelSpeaking.childImageSharp.fluid}
        className="flex-1 transition"
      />
      <Img
        fluid={data.freddiePitbull.childImageSharp.fluid}
        className="flex-1 transition"
      />
      <Img
        fluid={data.ravelKeynote.childImageSharp.fluid}
        className="flex-1 transition"
      />
    </section>
  )
}

export default FooterGallery
