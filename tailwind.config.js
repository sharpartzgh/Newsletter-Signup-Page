/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-mobile-svg": "url(src/images/illustration-sign-up-mobile.svg)",
        "bg-jpg-mobile": "url(src/images/mobile.jpg)",
        "bg-desktop": "url(src/images/mobile.jpg)"
      },
      colors:{
        'primary':"bg-[#1D213C]"
      }
    },
  },
  plugins: [],
}

