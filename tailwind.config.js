/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#1B4B59',
        secondary: '#DDEAA3',
      },
    },
  },
  plugins: [],
  plugins: [require('tw-elements/dist/plugin'), require('tailwindcss-radix')()],
}
