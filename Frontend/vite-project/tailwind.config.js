/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // blue
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["forest", "coffee"],
  }
}