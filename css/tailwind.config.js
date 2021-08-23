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
        "geek/yellow" : '#D1C941',
        "geek/gray" : '#c2c1c1',
        "white" : '#FAFAFA',
        'geek/violet' : '#878f9f',
        'geek/menu-bg': 'rgba(135, 143, 159, .75)',
        'geek/menu-bg-2': 'rgba(135, 143, 159, .95)',
      },
    },
    fontFamily: {
      'rubik-medium': ['Rubik-Medium'],
      'inter-bold': ['Inter-Bold'],
      'roboto-regular': ['Roboto-Regular'],
      'roboto-medium': ['Roboto-Medium'],
      'inder': ['Inder-Regular'],
     },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
