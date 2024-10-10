/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#373BC1',
      'green': '#B8FF72',
      'yellow': '#ffc82c',
      'gray-dark': '#2d2d2d',
      'gray-secondary': '#2d2d32',
      'tretiary': '#848484',
      'disabled': '#5A5A5A',
      'dark': '#1C1B23',
      'gray-light': '#d3dce6',
      'secondary': '#d1d1d1',
      'white': '#ffffff',
      'black': '#000000',
      'input': 'rgba(45, 45, 50, 0.4)',
      'input-dark': 'rgba(0, 0, 0, 0.12)',
      'transparent': 'transparent',
    },
    fontFamily: {
      'display': ['TexGyreHeros', ],
      'body': ['Commissioner',],
      'head': ['Lalezar',],
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {},
  },
  plugins: [],
}

