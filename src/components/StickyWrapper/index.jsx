import React from "react";
import tw, { css, styled } from "twin.macro";

import { useSize } from "~hooks";

import { breakpoint } from "~utils/css";

const Container = styled.div(({ offset }) => [
  tw`relative md-t:sticky md-t:overflow-y-scroll`,
  css`
    ${breakpoint(`md-t`)} {
      top: 0.625rem;
      height: calc(100vh - ${offset}px - ${0.625 * 2}rem);
    }
  `
]);

const StickyWrapper = ({ children, className }) => {
  const [stickyRef, stickySize] = useSize();

  return (
    <Container ref={stickyRef} className={className} offset={stickySize?.top}>
      {children}
    </Container>
  );
};

export default StickyWrapper;
