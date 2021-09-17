module.exports = {
  purge: [
    './index.html',
    './obrigado.html',
    './src/js/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: '#3A5479',
        street: '#1C273F'
      },
      spacing: {
        wmax: '45rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
