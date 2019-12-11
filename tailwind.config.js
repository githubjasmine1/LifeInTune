// See https://tailwindcss.com/docs/configuration for details

const theme = require('./src/styles/theme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: 'turismo, sans-serif',
        body: 'museo, sans-serif',
      },
      colors: theme.colors,
    },
  },
  variants: {},
  plugins: [],
}
