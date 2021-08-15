module.exports = {
  purge: [
    '../src/**/*.html',
    '../src/*.html',
    '../src/**/*.js',
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyanBlue: "#99EFD0",
        letterYellow: "#D1C941",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
