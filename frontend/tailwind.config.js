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
      primary :"#038c7f",
      secondary :"#01403A",
      thri:"#012626"
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

