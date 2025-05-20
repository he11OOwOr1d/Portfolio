/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm:'350px',
        md:'760px',
        lg:'1024px',
        xl:'1280px',
        "2xl":'1536px'
      },
      colors: {
        brown: "#53423e", 
        lightBrown: "#645550",
        darkBrown: "#2c2523",
        black: "#000000",
        white: "#ffffff",
        cyan: "#15d1e9",
        lightCyan: "#88e5f0",
        darkCyan: "#009fb3",
        orange: "#fb9718",
        lightOrange: "#fac27b",
        darkOrange: "#d28422",
        grey: "#626965",
        lightGrey: "#978580",
        darkGrey: "#3f4441",

        blueSky: "#a3d5ff",
        mellowYellow: "#f7e38e",
        forestGreen: "#228b22",
        red:'#FF0000',
        royalblue:'#4169e1',
        sky:'#87CEEB'
      },
      fontFamily: {
        body: ['Doto'],
        special: ['Roboto'],
      },
      boxShadow:{
        blueShadow: '0px 0px 20px 0px rgba(94,206,220,0.5)',
        blueMediumShadow: '10px 10px 200px 150px rgba(94,206,220,0.5)',
        royalBlueMediumShadow: '10px 10px 200px 150px rgba(65,105,225,0.5)' 
         
      }
    },
  },
  plugins: [],
}
