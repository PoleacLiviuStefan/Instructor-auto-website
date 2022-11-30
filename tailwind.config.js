/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/public/backgroundVolkswagen.webp')",
        'heromobile': "url('/public/backgroundVolkswagenmobile.jpg')",
        'presentation': "url('/public/VolkswagenPoloSCrossCutieManuala.png')",
        'interior': "url('/public/VolkswagenPoloSCrossCutieManualainteror.webp')",
        'exterior': "url('/public/VolkswagenPoloSCrossCutieManualaexterior.webp')",
        'presentationleft': "url('/public/VolkswagenTouranCutieAutomata.png')",
        'exterior3': "url('/public/VolkswagenPoloSCrossCutieManualaexterior1.webp')",
        'automata1': "url('/public/VolkswagenTouranCutieAutomataexterior.webp')",
        'automata2': "url('/public/VolkswagenTouranCutieAutomataexteriorspate.webp')",
        'automata3': "url('/public/VolkswagenTouranCutieAutomataexteriorfata.webp')"
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
        sideleft: {
          '0%': {
          
            width: '10.5rem',
            opacity: '1'
          },
         
          '100%': {
            width: '2rem',
            whitespace: "no-wrap",
            opacity: '0'
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
