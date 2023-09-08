/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

theme: {
  extend: {
    colors: {
      primary: '#3490dc',

      'purple': {
        '100' : '#80809D',
        '500': '#20203C', 
        '800' : '#6541F5'

      },
    },
  },
},
  plugins: [],
}

