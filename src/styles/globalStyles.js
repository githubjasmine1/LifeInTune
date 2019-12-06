import theme from './theme'
import { globalSelection } from './tools'
import { fontFaces } from './fonts'

export default [
  ...fontFaces,
  {
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
      wordWrap: 'break-word',
      fontKerning: 'normal',
      MozFontFeatureSettings: '"kern", "liga", "clig", "calt"',
      msFontFeatureSettings: '"kern", "liga", "clig", "calt"',
      WebkitFontFeatureSettings: '"kern", "liga", "clig", "calt"',
      fontFeatureSettings: '"kern", "liga", "clig", "calt"',
    },

    li: {
      listStyle: 'none',
      // https://www.scottohara.me/blog/2019/01/12/lists-and-safari.html
      '::before': {
        content: '"\\200B"', // zero-width space
        position: 'absolute',
      },
    },
  },
]
