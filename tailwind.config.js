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
      myBgGrey: '#F0F0F0',
      greyFoot: '#D9D9D9',
    },
    extend: {
      fontFamily: {
        alata: ['Alata'],
        sanx: ['DM+Sans'],
      },
      boxShadow: {
        myShadow: '0 25px 25px 0 rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
