/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/public/2021-11-04.jpg')",
        'car': "url('/public/Volkswagen_Jetta_registered_March_2002_1984cc_02.jpg')"
      },
      keyframes: {
        loading: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '100%'
          }
        },
        sideright: {
          '0%': {
            left: '-20rem',
            opacity: '0'
          },
          '76%': {
            opacity: '0'
          },
          '100%': {
            left: '0',
            opacity: '1'
          }
        },

        appear: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        disappear: {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        },
        slideright: {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '12rem',
          }
        },
        slideleft: {
          '0%': {
            width: '12rem'
          },
          '100%': {
            width: '0',
            visibility: 'hidden'

          }
        }
      }
    },
  },
  plugins: [],
}
