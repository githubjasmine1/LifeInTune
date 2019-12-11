// NOTES:
// - Consider using `font-display` (https://developers.google.com/web/updates/2016/02/font-display)

const fontPreloadHeaders = [
  // // proxima-nova 700
  // 'Link: <https://use.typekit.net/af/949f99/00000000000000003b9b3068/27/l?primer=e6066692ab328d1a92bb155659ed6609b693e1e352f0e8982e4224719b13bdfb&fvd=n7&v=3>; rel=preload; as=font; crossorigin',
  // // proxima-nova 400
  // 'Link: <https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/l?primer=e6066692ab328d1a92bb155659ed6609b693e1e352f0e8982e4224719b13bdfb&fvd=n4&v=3>; rel=preload; as=font; crossorigin',
  // // Typekit stylesheet
  // 'Link: <https://use.typekit.net/kwu3otz.css>; rel=preload; as=style',
]

// Use it if we can't use H2 push
const fontPreloads = [
  // {
  //   // proxima-nova 400
  //   rel: 'preload',
  //   as: 'font',
  //   type: 'font/woff2',
  //   crossorigin: 'anonymous',
  //   href:
  //     'https://use.typekit.net/af/705e94/00000000000000003b9b3062/27/l?primer=e6066692ab328d1a92bb155659ed6609b693e1e352f0e8982e4224719b13bdfb&fvd=n4&v=3',
  // },
]

const fontStyleSheets = [
  {
    rel: 'stylesheet',
    href: 'https://use.typekit.net/nkd7jjw.css',
  },
]

const fontFaces = [
  {
    '@font-face': {
      fontFamily: 'turismo',
      fontStyle: 'normal',
      fontWeight: 100,
      src: 'url("/fonts/turismo-cf-0.woff2") format("woff2")',
    },
  },
  // {
  //   '@font-face': {
  //     fontFamily: 'turismo',
  //     fontStyle: 'normal',
  //     fontWeight: 100,
  //     src: 'url("/fonts/turismo-cf-100.woff2") format("woff2")',
  //   },
  // },
  // {
  //   '@font-face': {
  //     fontFamily: 'turismo',
  //     fontStyle: 'normal',
  //     fontWeight: 200,
  //     src: 'url("/fonts/turismo-cf-200.woff2") format("woff2")',
  //   },
  // },
  // {
  //   '@font-face': {
  //     fontFamily: 'turismo',
  //     fontStyle: 'normal',
  //     fontWeight: 300,
  //     src: 'url("/fonts/turismo-cf-300.woff2") format("woff2")',
  //   },
  // },
  // {
  //   '@font-face': {
  //     fontFamily: 'turismo',
  //     fontStyle: 'normal',
  //     fontWeight: 400,
  //     src: 'url("/fonts/turismo-cf-400.woff2") format("woff2")',
  //   },
  // },
  // {
  //   '@font-face': {
  //     fontFamily: 'turismo',
  //     fontStyle: 'normal',
  //     fontWeight: 500,
  //     src: 'url("/fonts/turismo-cf-500.woff2") format("woff2")',
  //   },
  // },
  // {
  //   '@font-face': {
  //     fontFamily: 'turismo',
  //     fontStyle: 'normal',
  //     fontWeight: 600,
  //     src: 'url("/fonts/turismo-cf-600.woff2") format("woff2")',
  //   },
  // },
]

module.exports = {
  fontPreloadHeaders,
  fontPreloads,
  fontStyleSheets,
  fontFaces,
}
