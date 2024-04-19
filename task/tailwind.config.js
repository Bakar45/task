/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      screens :{
      xl:{'max':"1400px"},
      lg:{'max':"991px"},
      md:{'max':"767px"},
      xmd:{'max':"820px"},
      sm:{'max':"767px"},
      xsm:{'max':"350px"}
    }
  },
  plugins: [],
}