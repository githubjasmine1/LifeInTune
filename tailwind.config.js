// See https://tailwindcss.com/docs/configuration for details

const theme = require('./src/styles/theme')

module.exports = {
  theme: {
    extend: {
      colors: theme.colors,
    },
  },
  variants: {},
  plugins: [],
}
