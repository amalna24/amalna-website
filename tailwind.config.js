/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  options: {
    safelist: ['dark'],
  },
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)'],
        playfair: ['var(--font-playfair)'],
        truculenta: ['var(--font-truculenta)'],
      }
    },
  },
  plugins: [],
}