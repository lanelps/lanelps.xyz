import React from "react";
import tw, { css, styled } from "twin.macro";

import { Theme, Header } from "~components";
import { useApp, useSize } from "~hooks";

const Container = tw.div`fixed w-[calc(100vw - 2rem)] h-[calc(100vh - 1.25rem)] mx-4 my-2.5 border border-white overflow-hidden mix-blend-difference`;
const Main = styled.main(({ menuActive, topOffset }) => [
  tw`relative pb-2.5  overflow-x-hidden overflow-y-scroll`,
  css`
    padding-top: 42.26px;
    height: calc(
      100vh - ${menuActive ? `${topOffset - 42.6}px` : `0px`} - 1.25rem
    );
    transform: translateY(${menuActive ? `${topOffset - 42.6}px` : `0px`});
  `
]);
const Layout = ({ children, className }) => {
  const [menuRef, menuSize] = useSize();
  const { menuActive } = useApp();

  return (
    <div tw="bg-white h-screen">
      <Theme />
      <Container>
        <Header ref={menuRef} />
        <Main
          className={className}
          menuActive={menuActive}
          topOffset={menuSize?.height}
        >
          {children}
        </Main>
      </Container>
    </div>
  );
};

export default Layout;
