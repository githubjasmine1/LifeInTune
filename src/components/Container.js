import styled from '@emotion/styled'

import theme from '../styles/theme'
import { media, rem } from '../styles/tools'

const {
  maxPageContainerWidth,
  maxTextContainerWidth,
  containerGap: gap,
} = theme

const Container = styled.div(
  {
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  ({ fullWidth, narrow }) => ({
    maxWidth: fullWidth
      ? '100%'
      : narrow
      ? rem(maxTextContainerWidth + gap.mobile * 2)
      : rem(maxPageContainerWidth + gap.mobile * 2),
    paddingRight: rem(gap.mobile),
    paddingLeft: rem(gap.mobile),

    [media.tablet]: {
      maxWidth: fullWidth
        ? '100%'
        : narrow
        ? rem(maxTextContainerWidth + gap.tablet * 2)
        : rem(maxPageContainerWidth + gap.tablet * 2),
      paddingRight: rem(gap.tablet),
      paddingLeft: rem(gap.tablet),
    },

    [media.laptop]: {
      maxWidth: fullWidth
        ? '100%'
        : narrow
        ? rem(maxTextContainerWidth + gap.laptop * 2)
        : rem(maxPageContainerWidth + gap.laptop * 2),
      paddingRight: rem(gap.laptop),
      paddingLeft: rem(gap.laptop),
    },
  })
)

export default Container
