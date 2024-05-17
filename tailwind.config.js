/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.{html,js,ejs}',
    './views/*.{html, js, ejs}',
    "./src/**/*"
  ],
  theme: {
    extend: {
      colors : {
        'custom-sky-bg':'#5da5db',
      },
      fontFamily: {
        sans: ['Poppins'],
      },
    },
  },
  plugins: [],
}

