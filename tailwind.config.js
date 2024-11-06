/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        reddit: {
          orange: '#FF4500',
          blue: '#0079D3',
          gray: {
            dark: '#1A1A1B',
            light: '#DAE0E6',
            border: '#EDEFF1'
          }
        }
      }
    },
  },
  plugins: [],
};