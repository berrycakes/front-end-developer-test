/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('../public/assets/bgImg.png')",
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        oleo: ['Oleo Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
