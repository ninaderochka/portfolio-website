/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        agrandir: ['Agrandir', 'sans-serif'],
        sans: ['Montserrat','sans-serif'],
        swit: ['Switzer', 'sans-serif'],
        utendo: ['Utendo','sans-serif']
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
        'beige': '#f8ece3',
        'orange': '#f85800',
        'neon': '#cfe800',
        'purple': '#9700ff',
        'pink': '#ffcaf1'
      },
      boxShadow: {
        'custom': '6px 6px 0px 0 rgba(0, 0, 0, 100)',
        'customHover': '4px 4px 0px 0 rgba(0, 0, 0, 100)',
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        wiggle: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(10deg)',
          },
          '100%': {
            transform: 'rotate(-10deg)',
          },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        spin: 'spin 10s linear infinite',
        // scroll: 'scroll 20s linear infinite',
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


