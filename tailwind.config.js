/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Serif Light"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
