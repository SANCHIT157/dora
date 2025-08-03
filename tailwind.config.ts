/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This tells Tailwind to scan all JS, JSX, TS, TSX files in the src directory
  ],
  theme: {
    extend: {
      fontFamily: { // Add Inter font family, as used in the app
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}