// Example `tailwind.config.js` file
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  // These paths are just examples, customize them to match your project structure
  purge: [
    'tehetsegkatapult/**/*.html',
    'src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}