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
        loremblue: "#99EFD0",
        ipsumyellow: "#D1C941",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
