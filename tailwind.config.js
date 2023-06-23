/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.teal,
          DEFAULT: colors.teal[600]
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

