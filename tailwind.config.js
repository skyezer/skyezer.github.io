/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",
            "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        width_animation: "width_animation ease-in",
        fadeIn: "fadeIn 1s",

      }, 
      keyframes: {
        width_animation: {
          "0%" : {
            width: "0",
            opacity: "0"
          }, 
          "50%" : {
            width: "50%",
            opacity: "0.5"
          },
          "100%" : {
            width: "100%",
            opacity: "1"
          }
        }, 
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translate(0, 10vh)",
            transition: "all 1s",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0, 0)",
          },
        },

      },
      fontFamily: {
        avenir: ['Avenir', 'sans-serif'],
        passionate: ['Feeling Passionate','sans-serif'],
        stem_regular: ['Stem-Regular', 'sans-serif'],
        stem_light: ['Stem-Light', 'sans-serif'],
        stem_bold: ['Stem-Bold', 'sans-serif'],

      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}