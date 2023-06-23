/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        open: ['Open Sans', 'sans-serif'],
      },
      colors: {
        'amarillo': '#E7B810',
        'oscuro': '#191717',
        'amaOscuro': '#B9970E'
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }
    },
    
  },
  plugins: [],
}

