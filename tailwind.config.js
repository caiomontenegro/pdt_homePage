/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        teal: colors.teal,
        rose: colors.rose,
      },
      fontFamily: {
        'michroma': ['Michroma', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif']
      },
    },
  },
  plugins: [
    require('./node_modules/@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
