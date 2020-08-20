const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        journey: {
          red: '#ef1e42',
        },
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
