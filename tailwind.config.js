/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        'black': ['"Noto Serif JP 900"'],
      },
    },
  },
  plugins: [],
}
