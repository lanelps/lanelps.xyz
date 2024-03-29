import { useState, useEffect } from "react";
import { theme } from "twin.macro";
import { useMediaQuery } from "react-responsive";
import useResizeObserver from "@react-hook/resize-observer";
// import { useBreakpoint } from "gatsby-plugin-breakpoints";

import { isBrowser } from "~utils/css";

const BREAKPOINTS = theme`screens`;

const splitMedia = (mediaQuery) => +mediaQuery.split(`px`)[0];

const useDevice = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });
  // const breakpoints = useBreakpoint();
  const [screen, setScreen] = useState(null);

  const isMobile = useMediaQuery({
    query: `(min-width: 0px) and (max-width: ${
      splitMedia(BREAKPOINTS[`sm-t`]) - 1
    }px)`
  });

  const isTablet = useMediaQuery({
    query: `(min-width: ${splitMedia(
      BREAKPOINTS[`sm-t`]
    )}px) and (max-width: ${splitMedia(BREAKPOINTS[`lg-t`])}px)`
  });

  const isDesktop = useMediaQuery({
    query: `(min-width: ${splitMedia(BREAKPOINTS[`lg-t`]) + 1}px)`
  });

  //

  const breakpoints = Object.keys(BREAKPOINTS).reduce((acc, key) => {
    acc[key] = parseInt(BREAKPOINTS[key].replace(`px`, ``));
    return acc;
  }, {});

  //

  const deviceBelow = (device) =>
    !screen ? false : breakpoints[screen] < breakpoints[device];

  const deviceAbove = (device) =>
    !screen ? false : breakpoints[screen] > breakpoints[device];

  //

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  //
  const bodyElement = (isBrowser && window?.document?.body) || null;

  useResizeObserver(bodyElement, () => handleResize());

  useEffect(() => {
    if (!windowSize?.width || !windowSize?.height) {
      return;
    }

    const breakpointKeys = Object.keys(BREAKPOINTS);
    const breakpointValues = Object.values(BREAKPOINTS);

    setScreen(
      breakpointKeys[
        breakpointValues.indexOf(
          breakpointValues.find(
            (breakpoint) =>
              windowSize.width >= parseInt(breakpoint.replace(`px`, ``))
          )
        )
      ]
    );
  }, [windowSize]);

  useEffect(() => {
    console.log(`screen`, screen);
  }, [screen]);

  return {
    deviceAbove,
    deviceBelow,
    isDesktop,
    isMobile,
    isTablet,
    screen,
    windowSize
  };
};

export default useDevice;
