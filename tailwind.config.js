/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#fd7e35',
          'platinum-black': '#333',
          'bright-grey': '#b1b1b1',
          'gunsmoke-grey': '#8d8d8d',
          'royal-blue': '#3b82f6',
        },
      },
      fontFamily: {
        lato: ['Lato', 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif'],
        'lato-bold': ['Lato Bold', 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif'],
        'lato-heavy': ['Lato Heavy', 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif'],
        'lato-heavy-italic': ['Lato Heavy Italic', 'Helvetica', 'Verdana', 'Tahoma', 'sans-serif'],
      },
      spacing: {
        '11px': '11px',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('precss'), require('autoprefixer')],
};
