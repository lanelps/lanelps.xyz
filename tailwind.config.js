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
      current: `currentColor`,
      black: `#000000`,
      grey: `#969696`,
      white: `#FFFFFF`,
      blue: `#0066FF`,
      orange: `#FF9900`
    },
    fontFamily: {
      main: [`IBM Plex Sans`, ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      main: [
        `18px`,
        {
          lineHeight: `1.2`,
          letterSpacing: `0`
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
      appear: `appear 1000ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards`,
      "appear-up": `appear-up 600ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards`,
      "appear-down": `appear-down 600ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards`
    },
    animationDelay: {
      300: `300ms`,
      1000: `1000ms`
    },
    animationDuration: {
      DEFAULT: `600ms`,
      300: `300ms`,
      1000: `1000ms`,
      1500: `1500ms`,
      2000: `2000ms`
    },
    // animationIteration: {
    //   // 2: `2`
    // },
    // animationTiming: {
    //   // cubic: `cubic-bezier(0.215, 0.61, 0.355, 1)`
    // },
    gridColumn: gridSpan,
    gridColumnStart: gridColumns,
    gridColumnEnd: gridColumns,
    extend: {
      height: {
        min: `min-content`
      }
    }
  },
  variants: {}
};
