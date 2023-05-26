module.exports = {
  content: [
    './*.{html,js}',
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: '12px',
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '1426px'
      }
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px)
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      'xxl': '1400px'
    }
  },
  plugins: [],
}
