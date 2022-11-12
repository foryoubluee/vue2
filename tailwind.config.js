/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        yumincho: ['Sawarabi Mincho', 'serif'],
        JP: ['Noto Sans JP', 'serif']
      }
    }
  },
  plugins: []
}
