/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgb(29, 155, 240)',
        'custom-grey': 'rgb(113, 118, 123)'
      }
    },
  },
  plugins: [],
}

