const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      green: colors.emerald,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      white: colors.white,
      black: colors.black,
      themeBlue: '#98e2e1',
      themePink: '#f4a6be',
      themeBlack: '#1d1819',
      themeGray: '#999999',
      themeWhite: '#ffffff',
      bg: '#f5f6fb'
      // indigo: {
      //   light: '#98e2e1',
      //   DEFAULT: '#98e2e1',
      //   dark: '#98e2e1',
      // },
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
