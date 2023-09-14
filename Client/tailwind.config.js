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
        '600': '#1F1F35',
        '800' : '#6541F5',
        '200': '#353C4D',

      },
    

    },
    backgroundImage : {
      'back-blue' : "url('./src/assets/cards/Blue.svg')",
      'back-brinjal' : "url('./src/assets/cards/Brinjal.svg')",
      'back-brown' : "url('./src/assets/cards/Brown.svg')",
      'back-pink' : "url('./src/assets/cards/Pink.svg')",
      'back-purple' : "url('./src/assets/cards/Purple.svg')",
      'random' : "url('./src/assets/cards/random.jpg')"
  
    }
  },
},
  plugins: [],
}

