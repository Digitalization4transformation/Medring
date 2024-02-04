/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      placeholderColor: {
        'custom-color': '#ffffff', // Replace with your desired color
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow:{
        myShadow1: "4.1px -5px 0 0  rgb(241 245 249)",
        myShadow2: "-4.1px -5px 0 0  rgb(241 245 249)",
      },
      flex: {
        '3': 3,
        '6': 6,
        '9': 9,
      },
    },
  },
  plugins: [],
}
