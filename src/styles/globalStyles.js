import theme from './theme'
import { globalSelection } from './tools'
import { fontFaces } from './fonts'

export default [
  ...fontFaces,
  {
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },

    ...globalSelection(theme.colors.primary, theme.colors.white),

    html: {
      fontWeight: 400,
      fontSize: 16,
      fontFamily: '"proxima-nova", sans-serif',
      textSizeAdjust: '100%',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    },

    body: {
      margin: 0,
      wordWrap: 'break-word',
      fontKerning: 'normal',
      MozFontFeatureSettings: '"kern", "liga", "clig", "calt"',
      msFontFeatureSettings: '"kern", "liga", "clig", "calt"',
      WebkitFontFeatureSettings: '"kern", "liga", "clig", "calt"',
      fontFeatureSettings: '"kern", "liga", "clig", "calt"',
    },

    'h1, h2, h3, h4, h5, h6, hgroup, ul, ol, dl, dd, p, figure, pre, table, fieldset, blockquote, form, noscript, iframe, img, hr, address': {
      margin: 0,
      padding: 0,
    },

    li: {
      listStyle: 'none',
      // https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html
      '::before': {
        content: '"\\200B"', // zero-width space
        position: 'absolute',
      },
    },

    a: {
      textDecoration: 'none',
      color: 'inherit',
    },

    button: {
      margin: 0,
      padding: 0,
      font: 'inherit',
      color: 'inherit',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      backgroundColor: 'transparent',
    },

    img: {
      display: 'block',
      maxWidth: '100%',
    },
  },
]
