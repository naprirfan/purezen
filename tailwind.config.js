/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        green: '#5F9A8C',
        black: '#1F2020',
        gold: '#F5DDC5',
        blue: '#9BB5CE',
      }
    },
    fontFamily: {
      display: ['"Josefin Slab"', 'cursive'],
      body: ['"Roboto Slab"', 'serif'],
    },
  },
  plugins: [],
}

