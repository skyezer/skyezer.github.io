/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}",
            "./node_modules/flowbite/**/*.js",
            "./node_modules/flowbite/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}