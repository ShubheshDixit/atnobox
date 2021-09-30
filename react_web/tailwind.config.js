const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bg-black': '#1A1A1A',
        'bg-dark': '#1C1C1C',
        'bg-light': '#1A1A1A',
        'primary-dark': '#013DFE',
        'primary-light': '#B1F4FF',//'#C9D7FF',
        'secondary': '#00F6FF',
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {
      'height': ['hover', 'focus', 'responsive', 'group-hover'],
      'display': ['hover', 'focus', 'responsive', 'group-hover']
    },
  },
  plugins: [],
}
