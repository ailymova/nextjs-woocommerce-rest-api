/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
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
