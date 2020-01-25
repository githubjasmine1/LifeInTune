import theme from './theme'
import { globalSelection } from './tools'
import { fontFaces } from './fonts'

export default [
  ...fontFaces,
  {
    ...globalSelection(theme.colors.gold['500'], theme.colors.white),

    html: {
      fontWeight: 300,
      fontSize: 16,
      fontFamily: 'museo, sans-serif',
      textSizeAdjust: '100%',
      textRendering: 'optimizeLegibility',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
      overflowX: 'hidden',
    },

    body: {
      wordWrap: 'break-word',
      fontKerning: 'normal',
      MozFontFeatureSettings: '"kern", "liga", "clig", "calt"',
      msFontFeatureSettings: '"kern", "liga", "clig", "calt"',
      WebkitFontFeatureSettings: '"kern", "liga", "clig", "calt"',
      fontFeatureSettings: '"kern", "liga", "clig", "calt"',
      backgroundColor: theme.colors.gold['500'],
      overflowX: 'hidden',
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
