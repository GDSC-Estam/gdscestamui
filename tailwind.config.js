/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Google Colors
        blueColor: "#4285F4",
        redColor: "#EA4335",
        yellowColor: "#FBBC04",
        greenColor: "#0F9D58"
      }
    },
  },
  plugins: [],
}