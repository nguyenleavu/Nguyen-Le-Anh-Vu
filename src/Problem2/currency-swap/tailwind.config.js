/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: "#006ce0",
        secondary: "#0a146e",
      },
      spacing: {
        banner: "410px",
        container: "1152px",
      },
      boxShadow: {
        input: "rgba(0, 17, 51, 0.05) 0px 3px 15px",
        wrapper: "rgba(35, 55, 80, 0.3) 0px 6px 12px",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
