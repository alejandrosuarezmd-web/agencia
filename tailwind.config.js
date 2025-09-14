/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        orange: {
          DEFAULT: '#FE6802', // verde base
          dark: '#F36301',    // verde oscuro
        },

        green: {
          light: '#31655E',  // verde claro
          DEFAULT: '#1B514A', // verde base
        }
      }
    },
  },
  plugins: [],
}
