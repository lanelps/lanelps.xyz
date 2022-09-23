const defaultTheme = require(`tailwindcss/defaultTheme`);
const twAnimation = require(`tailwindcss-animation`);

const createTailWindGrid = (size = 12) => {
  const gridSpan = { "span-full": `1 / -1` };
  const gridColumns = { full: `-1` };

  Array(size)
    .fill(null)
    .forEach((_, index) => {
      const itemIndex = index + 1;
      gridSpan[`span-${itemIndex}`] = `span ${itemIndex} / span ${itemIndex}`;
      gridColumns[itemIndex] = itemIndex;
    });

  return { gridSpan, gridColumns };
};

const { gridSpan, gridColumns } = createTailWindGrid();

module.exports = {
  darkMode: `class`,
  content: [
    `./components/**/*.{js,ts,jsx,tsx}`,
    `./pages/**/*.{js,ts,jsx,tsx}`,
    `./templates/**/*.{js,ts,jsx,tsx}`
  ],
  plugins: [twAnimation],
  theme: {
    colors: {
      transparent: `transparent`,
      black: `#000000`,
      white: `#FFFFFF`,
      //
      "grey-70": `#1E1E1E`,
      "grey-60": `#323232`,
      "grey-50": `#4F4F4F`,
      "grey-40": `#969696`,
      "grey-30": `#BEBEBE`,
      "grey-20": `#DDDEE2`,
      "grey-10": `#F0F0F0`
    },
    fontFamily: {
      main: [`Helvetica Neue`, ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      desktop: [
        `62px`,
        {
          lineHeight: `68.2px`,
          letterSpacing: `0em`
        }
      ],
      mobile: [
        `30px`,
        {
          lineHeight: `33px`,
          letterSpacing: `0em`
        }
      ]
    },
    screens: {
      "xxl-d": `1920px`,
      "xl-d": `1728px`,
      "lg-d": `1512px`,
      "md-d": `1440px`,
      "sm-d": `1280px`,
      //
      "lg-t": `1024px`,
      "md-t": `834px`,
      "sm-t": `744px`,
      //
      "lg-m": `428px`,
      "md-m": `414px`,
      "sm-m": `360px`,
      "xs-m": `320px`
    },
    transitionTimingFunction: {
      DEFAULT: `cubic-bezier(0.215, 0.61, 0.355, 1)`
    },
    transitionDuration: {
      DEFAULT: `300ms`,
      1000: `1000ms`
    },
    keyframes: {
      appear: {
        "0%": { opacity: `0` },
        "100%": { opacity: `1` }
      },
      "appear-up": {
        "0%": { opacity: `0`, transform: `translateY(calc(100% + 1rem))` },
        "100%": { opacity: `1`, transform: `translateY(0%)` }
      },
      "appear-down": {
        "0%": { opacity: `0`, transform: `translateY(calc(-100% - 1rem))` },
        "100%": { opacity: `1`, transform: `translateY(0%)` }
      }
    },
    animation: {
      appear: `appear 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) forwards`,
      "appear-up": `appear-up 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) forwards`,
      "appear-down": `appear-down 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) forwards`
    },
    animationDelay: {
      300: `300ms`,
      1000: `1000ms`
    },
    // animationDuration: {
    //   // 300: `300ms`,
    //   // 1000: `1000ms`
    // },
    // animationIteration: {
    //   // 2: `2`
    // },
    // animationTiming: {
    //   // cubic: `cubic-bezier(0.215, 0.61, 0.355, 1)`
    // },
    gridColumn: gridSpan,
    gridColumnStart: gridColumns,
    gridColumnEnd: gridColumns
  },
  variants: {}
};
