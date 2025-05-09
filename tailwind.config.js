/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#F97316'
      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

