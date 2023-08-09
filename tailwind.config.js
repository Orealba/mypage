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
      myBg: '#ffffff',
      myBgGrey: 'F0F0F0',
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
