/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mountain-dark': "url('https://wallpapers.com/images/featured/dark-mountain-gd3o1mx0wxezbewk.jpg')"
      }
    },
  },
  plugins: [],
}