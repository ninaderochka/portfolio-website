module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {      
      fontFamily: {
        agrandir: ['Agrandir', 'sans-serif'],
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
    colors: {
    'beige': '#f8ece3',
    'orange': '#f85800',
    'neon': '#cfe800',
    'purple': '#9700ff',
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}