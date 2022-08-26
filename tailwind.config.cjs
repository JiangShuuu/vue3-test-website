/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Arial', 'Microsoft JhengHei', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          light: '#ffedee',
          DEFAULT: '#ff3b3f',
          dark: '#c7070b',
        },
        secondary: {
          light: '#eefbff',
          DEFAULT: '#76bad2',
          dark: '#1c87ac',
        },
        gray: {
          100: '#ebebeb',
          200: '#e1e1e1',
          300: '#b4b4b4',
          400: '#969696',
          500: '#787878',
          600: '#5a5a5a',
        },
        background: '#f8f8f8',
      },
    },
  }
}
