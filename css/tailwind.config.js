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
        "geek/dark-blue" : '#040D3E',
        "geek/light-blue" : '#004d88',
        "geek/cyan-blue" : '#99EFD0',
        "geek/yellow" : '#D1C941'
      },
    },
    fontFamily: {
      'rubik-medium': ['Rubik-Medium'],
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
