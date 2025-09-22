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
      },
      screens: {
        mobile: { max: "799px" },       // < 800px
        sm: { min: "800px", max: "1199px" }, // 800px - 1199px
        md: { min: "1200px", max: "1399px" }, // 1200px - 1399px
        lg: { min: "1400px" },          // ≥ 1400px
      },
       boxShadow: {
        'custom-header': '0px 10px 43px -19px rgba(138, 138, 138, 1)',
      },
    },
  },
  plugins: [],
}
