/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        primary: "#1C065A",
        secondary: "#37A169",
        accent1: "#824CFC"
      }
    }
  },
  plugins: []
};
