/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {      
      fontFamily: {
        agrandir: ['Agrandir', 'sans-serif'],
        sans: ['Montserrat','sans-serif'],
      },
      fontSize: {
        '3xl': '1.85rem',
        '7.5xl': '5.5rem',
        '6.5xl': '4.2rem'
      },
      lineHeight: {
        '12': '3rem',
      },
      letterSpacing: {
        tight: '-.04em',
      },
      colors: {
        'beige': '#f2ece9',
        'orange': '#f85800',
        'neon': '#cfe800',
        'purple': '#9700ff',
        'pink': '#ffcaf1',
        'grey' :'#e9e9e9'
      },
      boxShadow: {
        'custom': '6px 6px 0px 0 rgba(0, 0, 0, 100)',
        'customHover': '4px 4px 0px 0 rgba(0, 0, 0, 100)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        spin: 'spin 10s linear infinite'
      },
      height: {
        '128': '35rem',
      }
    },
    variants: {
      extend: {
        animation: ['hover'],
      },
    },
    plugins: [],
  }
}

