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
        sway: "sway 2s infinite",
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
        sway: {
          "0%": {
            transform: "translate(0px, 0px)",
          },
          "50%": {
            transform: "translate(8px, 0px)",
          },
          // "66%": {
          //   transform: "translate(15px, 0px)",
          // },
          "100%": {
            transform: "tranlate(0px, 0px)",
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