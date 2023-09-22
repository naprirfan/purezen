/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        green: '#AEE1CD',
        black: '#1F2020',
        gold: '#F5DDC5',
        blue: '#9BB5CE',
      }
    },
    fontFamily: {
      sans: ['Helvetica Neue', 'sans-serif'],
      serif: ['Futura', 'serif'],
    },
  },
  plugins: [],
}

