import { theme } from 'twin.macro';
import { useMediaQuery } from 'react-responsive';

const splitMedia = mediaQuery => {
  return +mediaQuery.split(`px`)[0];
};

const useCSSMediaQuery = () => {
  const isMobile = useMediaQuery({
    query: `(min-width: 0px) and (max-width: ${theme`screens.xs.min`})`
  });

  const isTablet = useMediaQuery({
    query: `(min-width: ${
      splitMedia(theme`screens.xs.min`) + 1
    }px) and (max-width: ${splitMedia(theme`screens.md.min`) - 1}px)`
  });

  const isDesktop = useMediaQuery({
    query: `(min-width: ${theme`screens.md.min`})`
  });

  return { isMobile, isTablet, isDesktop };
};

export default useCSSMediaQuery;
