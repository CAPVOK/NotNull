/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1440px',
        // => @media (min-width: 1536px) { ... }
      },
      colors:{
        headerLinks: '#d5d9df',
        hoverBg: '#a9aeb429',
        activeBg: '#a1a5aa62',
        formBg: '#2d2868',
      },
      padding:{

      },
      animation: {
        'appearanceInp': 'ani 1.5s forwards',
        'spin-slow': 'spin 5s linear infinite',
      },
      keyframes: {
        ani: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        },
      }
    },
  },
  plugins: [],
}

