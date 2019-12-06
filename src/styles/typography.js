import styled from '@emotion/styled'

import theme from './theme'
import { rem, media } from './tools'

export const headline = {
  fontWeight: 700,
  fontSize: rem(24),
}

export const paragraph = {
  fontWeight: 400,
  fontSize: rem(16),
  lineHeight: 1.6,
  color: theme.colors.grey_500,
  [media.laptop]: {
    fontSize: 18,
    lineHeight: 1.9,
  },
}

export const postStyles = {
  'h1, h2, h3, h4, h5, h6, hgroup, ul, ol, dl, dd, p, figure, pre, table, fieldset, blockquote, form, noscript, iframe, img, hr, address': {
    marginBottom: rem(30),
  },
  'h1, h2, h3, h4, h5, h6': {
    ...headline,
    marginTop: rem(60),
  },
  h1: { fontSize: rem(24) },
  h2: { fontSize: rem(20) },
  'h3, h4, h5, h6': { fontSize: rem(18) },
  'p, li': paragraph,
  a: {
    textDecoration: 'underline',
  },
  // Ensure li > p is 1/2 margin — this is another markdown => compiler oddity.
  'li, li > p': {
    marginBottom: rem(15),
  },
  'ul li': {
    listStyle: 'inside disc',
  },
  'ol li': {
    listStyle: 'inside decimal-leading-zero',
  },
  'ul, ol': {
    marginTop: rem(30),
    marginBottom: rem(30),
  },
}

export const activeLinkStyles = {
  textDecoration: 'underline',
}

export const Headline = styled.span(headline)

export const Paragraph = styled.p(paragraph)
