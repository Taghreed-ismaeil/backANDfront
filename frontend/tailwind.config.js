/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
      primary :"#D8C099",
      secondary :"#A09183",
      thri:"#B8A490"
    },
    container :{
      center : true,
      padding :{
        DEFAULT : "1rem",
        sm: "3rem",
       },
      }, 
    },
  },
  plugins: [],
};

