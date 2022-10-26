import React from "react";
import tw, { css, styled } from "twin.macro";

import { Theme, Header } from "~components";
import { useApp } from "~hooks";

const Container = tw.div`fixed w-[calc(100vw - 2rem)] h-[calc(100vh - 1.25rem)] mx-4 my-2.5 border border-white overflow-hidden mix-blend-difference`;
const Main = styled.main(({ menuActive }) => [
  tw`relative pb-2.5  overflow-x-hidden overflow-y-scroll`,
  css`
    height: calc(100vh - ${menuActive ? `209px` : `46.2px`} - 1.25rem);
  `
]);
const Layout = ({ children, className }) => {
  const { menuActive } = useApp();

  return (
    <div tw="bg-white h-screen">
      <Theme />
      <Container>
        <Header />
        <Main className={className} menuActive={menuActive}>
          {children}
        </Main>
      </Container>
    </div>
  );
};

export default Layout;
