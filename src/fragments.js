import { graphql } from 'gatsby'

// https://docs.google.com/spreadsheets/d/1IpTYTTMJLcSXcPDtW9zSbPBHQyRdrLfKERohGIIkE_Q/edit#gid=1990145635
export const facebookShareImage = graphql`
  fragment facebookShareImage on File {
    childImageSharp {
      fixed(
        width: 1200
        height: 628
        quality: 80
        cropFocus: CENTER
        toFormat: JPG
      ) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

// https://docs.google.com/spreadsheets/d/1IpTYTTMJLcSXcPDtW9zSbPBHQyRdrLfKERohGIIkE_Q/edit#gid=0
export const twitterShareImage = graphql`
  fragment twitterShareImage on File {
    childImageSharp {
      fixed(
        width: 1024
        height: 512
        quality: 80
        cropFocus: CENTER
        toFormat: JPG
      ) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const windowWide = graphql`
  fragment windowWide on File {
    childImageSharp {
      fluid(maxWidth: 2500, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

// maxWidth should be equal to theme.maxPageContainerWidth
export const pageContainerWide = graphql`
  fragment pageContainerWide on File {
    childImageSharp {
      fluid(maxWidth: 1480, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

// maxWidth should be equal to theme.maxTextContainerWidth
export const textContainerWide = graphql`
  fragment textContainerWide on File {
    childImageSharp {
      fluid(maxWidth: 880, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const photoSwipeImage = graphql`
  fragment photoSwipeImage on File {
    childImageSharp {
      msrc: fixed(width: 500, quality: 90) {
        ...GatsbyImageSharpFixed_noBase64
      }
      src: fixed(width: 1920, quality: 90) {
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
`

export const headerImage = graphql`
  fragment headerImage on File {
    childImageSharp {
      fluid(maxWidth: 1680, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp_noBase64
      }
    }
  }
`
