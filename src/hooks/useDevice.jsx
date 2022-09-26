import { theme } from "twin.macro";
import { useMediaQuery } from "react-responsive";

const splitMedia = (mediaQuery) => +mediaQuery.split(`px`)[0];

const useDevice = () => {
  const isMobile = useMediaQuery({
    query: `(min-width: 0px) and (max-width: ${theme`screens.sm-t` - 1}px)`
  });

  const isTablet = useMediaQuery({
    query: `(min-width: ${splitMedia(
      theme`screens.sm-t`
    )}px) and (max-width: ${splitMedia(theme`screens.lg-t`)}px)`
  });

  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme`screens.lg-t` + 1}px)`
  });

  console.log(`isMobile`, isMobile);
  console.log(`isTablet`, isTablet);
  console.log(`isDesktop`, isDesktop);

  return { isMobile, isTablet, isDesktop };
};

export default useDevice;
