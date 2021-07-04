const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
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
      main: `IBM Plex Sans`
    },
    fontSize: {
      heading: [`24px`, `1`],
      body: [`13px`, `1`]
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
