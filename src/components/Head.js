import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { Global } from '@emotion/core'

import theme from '../styles/theme'
import globalStyles from '../styles/globalStyles'
import { fontPreloads, fontStyleSheets } from '../styles/fonts'

const Head = () => (
  <Fragment>
    <Helmet
      link={[
        ...fontPreloads,
        ...fontStyleSheets,
        {
          rel: 'dns-prefetch',
          href: 'https://www.google-analytics.com',
        },
        {
          rel: 'dns-prefetch',
          href: 'https://www.google.com',
        },
        {
          type: 'text/plain',
          rel: 'author',
          href: '/humans.txt',
        },
        {
          // It's inlined by gatsby when imported in js
          // It doesn't need to be processed so it's ok to keep it in static folder
          rel: 'mask-icon',
          href: '/safari-pinned-tab.svg',
          color: theme.colors.safariPinnedTab,
        },
        {
          // We are importing apple icon here because:
          // - it should be different than android icon or favicon
          //   (it should be square with a background)
          // - it doesn't need to be processed by sharp
          // - one size is enough
          rel: 'apple-touch-icon',
          sizes: '512x512',
          href: '/apple-touch-icon-512x512.png',
        },
      ]}
    />
    <Global styles={globalStyles} />
  </Fragment>
)

export default Head
