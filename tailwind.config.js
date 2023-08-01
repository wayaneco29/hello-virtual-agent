/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffcc00',
        secondary: '#ff6000',
        'greeny-gray': '#ebf4f3',
      },
      fontSize: {
        h1: '42px',
        h2: '28px',
        h3: '25px',
        button: '18px',
        p: '17px',
      },
      screens: {
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
