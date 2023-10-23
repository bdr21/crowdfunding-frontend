/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    // "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        '1002': '1002',
        '1003': '1003',
        '1': '1'
      },
      transitionDuration: {
        '3000': '3000ms',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // require('flowbite/plugin')
  ],
}