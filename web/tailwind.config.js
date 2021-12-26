const defaultTheme = require(`tailwindcss/defaultTheme`);
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [],
  darkMode: `class`,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: `#000`,
      white: `#FFF`,
      blue: `#0066ff`,
      red: `#ff5f5f`,
      turq: `#00a9d0`,
      bronze: `#ba670d`,
      purple: `#cbcbff`
    },
    fontFamily: {
      main: [`IBM Plex Sans`, ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      'heading-md': [`24px`, `1.2`],
      heading: [`20px`, `normal`],
      body: [`13px`, `normal`]
    },
    screens: {
      xs: {
        min: `428px`
      },
      sm: {
        min: `768px`
      },
      md: {
        min: `1025px`
      },
      lg: {
        min: `1440px`
      },
      xl: {
        min: `1920px`
      }
    },
    extend: {
      transitionDuration: {
        400: '400ms'
      },
      height: {
        min: 'min-content'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
