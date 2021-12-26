import { theme } from 'twin.macro';
import { useMediaQuery } from 'react-responsive';

const useCSSMediaQuery = () => {
  const isMobile = useMediaQuery({
    query: `(min-device-width: 0px)`
  });

  const isTablet = useMediaQuery({
    query: `(min-device-width: ${theme`screens.sm.min`})`
  });

  const isDesktop = useMediaQuery({
    query: `(min-device-width: ${theme`screens.md.min`})`
  });

  return { isMobile, isTablet, isDesktop };
};

export default useCSSMediaQuery;
