import React, { useState, useLayoutEffect, useRef } from "react";
import tw, { css, styled } from "twin.macro";

import { breakpoint } from "~utils/css";

const Container = styled.div(({ offset }) => [
  tw`relative md-t:sticky overflow-y-scroll`,
  css`
    ${breakpoint(`md-t`)} {
      top: 0.625rem;
      height: calc(100vh - ${offset}px - 2rem);
    }
  `
]);

const StickyWrapper = ({ children, className }) => {
  const stickyRef = useRef();
  const [stickyOffset, setStickyoffset] = useState(0);

  useLayoutEffect(() => {
    if (!stickyRef?.current) return;

    setStickyoffset(stickyRef?.current?.getBoundingClientRect()?.top);
  }, [stickyRef]);
  return (
    <Container ref={stickyRef} className={className} offset={stickyOffset}>
      {children}
    </Container>
  );
};

export default StickyWrapper;
