/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#0f172a",
        light: "#f8fafc",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
}