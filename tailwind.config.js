/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono",
    },

    extend: {
      scale: {
        120: "1.2",
      },
      colors: {
        primary: "#00A3E0",     
        secondary: "#0B162C",
        tertiary :"#B6BFDA",
        primaryHover: "#0d1476ff", 
      },
      
    },
  },
  plugins: [],
};
