/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        primary: "#2B4570", // Dark Corn
        secondary: "#5497A7", // Blue Munsell
        tertiary: "#50858B", // gray
        background: "#FOF7F4", // white
        highlight: "#62A8AC", // Cadet Blue
        /* orange: '#D7D9CE', */
        transparent: "transparent", // transparent
        dark_flower: "#2B4570",
        mint_cream: "#F0F7F4",
        cadet_blue: "#62A8AC",
        blue_munsell: "#5497A7",
        steel_teal: "#50858B",
        dark: "black",
        white: "white",
        blur: "rgba(0,0,0,0.5)",
        orange: colors.orange,
        yellow: "#FFE800",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "active"],
    },
  },
  plugins: [],
}
