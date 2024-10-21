/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "Roboto"]
      },
      colors: {
        bluePrimary: "#0c2461",
        redSecondary: "#b71540"
      },
    },
  },
  plugins: [],
}

