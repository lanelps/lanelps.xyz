import { useState, useEffect } from "react";
import { theme } from "twin.macro";
import { useMediaQuery } from "react-responsive";
import useResizeObserver from "@react-hook/resize-observer";

const BREAKPOINTS = theme`screens`;

const splitMedia = (mediaQuery) => +mediaQuery.split(`px`)[0];

const useDevice = () => {
  const isMobile = useMediaQuery({
    query: `(min-width: 0px) and (max-width: ${BREAKPOINTS[`sm-t`] - 1}px)`
  });

  const isTablet = useMediaQuery({
    query: `(min-width: ${splitMedia(
      BREAKPOINTS[`sm-t`]
    )}px) and (max-width: ${splitMedia(BREAKPOINTS[`lg-t`])}px)`
  });

  const isDesktop = useMediaQuery({
    query: `(min-width: ${splitMedia(BREAKPOINTS[`lg-t`]) + 1}px)`
  });

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  const [screen, setScreen] = useState(null);

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

  useResizeObserver(window.document.body, () => handleResize());

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
