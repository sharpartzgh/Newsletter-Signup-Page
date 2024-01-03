/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '280px', 'max': '430px'},
      // => @media (min-width: 280px and max-width: 430px) 

      'md': {'min': '430px', 'max': '830px'},
      // => @media (min-width: 430px and max-width: 830px) 

      'lg': {'min': '830px', 'max': '1590px'},
      // => @media (min-width: 1024px and max-width: 1279px) 
    },
    extend: {
      backgroundImage: {
        "bg-mobile": "url(src/images/illustration-sign-up-mobile.svg)",
        "bg-desktop": "url(src/images/illustration-sign-up-desktop.svg)"
      },
      colors:{
        'primary':"bg-[#1D213C]"
      }
    },
  },
  plugins: [],
}

