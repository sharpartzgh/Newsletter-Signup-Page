/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-mobile': "url('../images/illustration-sign-up-mobile.svg')"
      },
      colors:{
        'primary':"bg-[#1D213C]"
      }
    },
  },
  plugins: [],
}

