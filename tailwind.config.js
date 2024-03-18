/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        title: ['Grifter', ...defaultTheme.fontFamily.serif],
        text: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        sans: ['DM Sans', ...defaultTheme.fontFamily.serif]
      },
      colors: {
        primary: "#34DAE8",
        secondary: "#CBD5E0",
        slate: "#9AA19E"
      },
      container:{  
        center: true,
        padding: "1rem"
      },
      backgroundImage: {
        "gradient": "linear-gradient(180deg, #1F1F1F 0%, rgba(31, 31, 31, 0) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
