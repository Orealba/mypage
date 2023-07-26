/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      myWine: '#850808',
      myGrey: '#5d534a',
    },
    extend: {
      fontFamily: {
        alata: ['Alata'],
        sanx: ['DM+Sans'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
