/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        themeColor: '#669595',
      }
    },
  },
  daisyui: {
    themes: ['light'],
  },
  plugins: [require('daisyui')],
};