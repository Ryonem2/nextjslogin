const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'white' : '#fff'
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      while : colors.white,
      gray : colors.gray,
      blueGray : colors.blueGray,
      red : colors.red,
      orange : colors.orange,
      yellow : colors.yellow,
      green : colors.green,
      emerald : colors.emerald,
      sky : colors.sky,
      blue : colors.blue,
      indigo : colors.indigo,
      violet : colors.violet,
      purple : colors.purple,
      fuchsia : colors.fuchsia,
      pink : colors.pink,
      teal : colors.teal,
      amber : colors.amber,
      cyan : colors.cyan,
      rose : colors.rose
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
