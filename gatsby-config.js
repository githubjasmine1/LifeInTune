const siteConfig = require('./site-config')
const theme = require('./src/styles/theme')
const { fontPreloadHeaders } = require('./src/styles/fonts')

module.exports = {
  siteMetadata: siteConfig,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/styles/tailwind.css`],
      },
    },
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: theme.colors.progressBar,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: siteConfig.siteUrl,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.siteName,
        short_name: siteConfig.shortSiteName,
        start_url: siteConfig.startUrl,
        background_color: theme.colors.appScreenBackgroundColor,
        theme_color: theme.colors.themeColor,
        display: 'standalone',
        icon: 'src/assets/favicon.png',
        legacy: false, // We'll add apple icon in <Head />
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: siteConfig.gaTrackingId,
      },
    },
    'gatsby-plugin-layout',
    {
      // make sure to keep it last in the array
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: fontPreloadHeaders,
      },
    },
  ],
}
