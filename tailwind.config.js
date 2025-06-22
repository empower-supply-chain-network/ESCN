/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#1A4D43', // logo-dark-green
        'emerald-green': '#2E8B57', // logo-medium-green
        'white-linen': '#F8F6F2', // background-main
        'card-white': '#FFFFFF', // background-card
        'text-primary': '#1A4D43', // text-primary (same as forest-green)
        'text-secondary': '#545454', // text-secondary
        'text-on-dark': '#F8F6F2', // text-on-dark-bg
        'text-on-medium': '#FFFFFF', // text-on-medium-bg
        'border-light': '#E0E0E0',
        'border-medium': '#C0C0C0',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}