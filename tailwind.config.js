/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        offwhite: '#F5F4F0',
        ink: '#111111',
        warmgrey: '#B8B5AE',
        bordeaux: '#7C2D3E',
      },
      fontFamily: {
        sans: ['"Noto Serif Light"', ...defaultTheme.fontFamily.serif],
        display: ['"Noto Serif Bold"', ...defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        reading: '72ch',
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
};
