const colorsByName = {
  red: '#D84315',
  white: '#fff',
  grey_050: '#F4F4F4',
  grey_100: '#eee',
  grey_200: '#999',
  grey_300: '#888',
  grey_400: '#777',
  grey_500: '#666',
  grey_600: '#444',
  grey_700: '#333',
  grey_800: '#222',
  grey_900: '#111',
  black: '#000',

  gray: {
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#222',
    1000: '#111',
  },
  gold: {
    500: '#b4903a',
  },
}

const colorsByRole = {
  primary: colorsByName.red,
}

const colorsByUseCase = {
  progressBar: colorsByRole.primary,
  safariPinnedTab: colorsByRole.primary,
  themeColor: colorsByRole.primary,
  appScreenBackgroundColor: colorsByName.grey_100,
}

module.exports = {
  breakpoints: {
    mobile: 1,
    tablet: 600,
    laptop: 1024,
    desktop: 1600,

    mobileSm: 1,
    mobileMd: 375,
    mobileLg: 425,

    tabletSm: 600,
    tabletMd: 768,
    tabletLg: 900,

    laptopSm: 1024,
    laptopMd: 1366,
    laptopLg: 1440,

    desktopSm: 1600,
    desktopMd: 1700,
    desktopLg: 1920,
  },

  space: {
    xxs: 2,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
    xl: 64,
    xxl: 128,
  },

  // When updating these, update also corresponding fragments
  maxPageContainerWidth: 1480,
  maxTextContainerWidth: 880,

  containerGap: {
    mobile: 20,
    tablet: 30,
    laptop: 60,
  },

  colors: {
    ...colorsByName,
    ...colorsByRole,
    ...colorsByUseCase,
  },
}
