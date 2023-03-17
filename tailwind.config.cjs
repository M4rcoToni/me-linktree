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
      colors: {
        'gradient': 'linear-gradient(90deg, #9572FC 0%, #00d4ff 50.52%, #e700ff 100%)',
      },
      backgroundImage: {
        'gradient': 'linear-gradient(90deg, #9572FC 0%, #00d4ff 50.52%, #e700ff 100%)',
      }
    },
  },
  plugins: [],
}
