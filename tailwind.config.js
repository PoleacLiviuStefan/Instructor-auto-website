/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/public/2021-11-04.jpg')",
        'car': "url('/public/Volkswagen_Jetta_registered_March_2002_1984cc_02.jpg')",
        'heromobile': "url('/public/phonehero.jpg')",
        'presentation': "url('/public/presentationcar.png')",
        'interior': "url('/public/interor.jpg')",
        'exterior': "url('/public/exterior2.jpg')",
        'presentationleft': "url('/public/presentationcarleft.png')",
        'exterior3': "url('/public/exterior3.jpg')",
        'automata1': "url('/public/automata1.jpg')",
        'automata2': "url('/public/automata2.jpg')",
        'automata3': "url('/public/automata3.jpg')"
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
            width: '2rem',
            whitespace: "no-wrap",
            opacity: '0'
          },
          '30%': {
            opacity: '0'
          },
          '100%': {
            width: '10.5rem',
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
        },
        animarrow: {
          '0%': {
            top: '0rem'
          },
          '100%': {
            top: '.5rem'

          }
        },
      }
    },
  },
  plugins: [],
}
