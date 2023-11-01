/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        green: '#5F9A8C',
        black: '#1F2020',
        lightBlack: '#4D4D4D',
        gold: '#F5DDC5',
        blue: '#9BB5CE',
        gray: '#C6C6C7',
        lightGreen: '#DEE8DF',
      }
    },
    fontFamily: {
      display: ['"Josefin Slab"', 'serif'],
      body: ['"Roboto Slab"', 'serif'],
    },
  },
  plugins: [],
}

