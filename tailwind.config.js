/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#F4C223',
          light: '#F5D03A',
          dark: '#D4A81E',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          lighter: '#2A2A2A',
          darker: '#0A0A0A',
        },
        light: {
          DEFAULT: '#FFFFFF',
          gray: '#EFEFEF',
        }
      },
      fontFamily: {
        display: ['Oswald', 'Bebas Neue', 'Impact', 'sans-serif'],
        body: ['Montserrat', 'Poppins', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
