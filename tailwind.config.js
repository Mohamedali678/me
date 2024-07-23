/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors: {
        primaryColor: "#FF6464",
        secondaryColor: "#00A8CC",
        thirdColor: "#EDF7FA"
      },

      fontFamily: {
        primaryFont: "Heebo, sans-serif"
      }
    },
  },
  plugins: [],
}

