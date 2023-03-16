/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        back: "url('/background.png')",
        grad: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
      }
    },
  },
  plugins: [],
}
