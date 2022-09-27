import React from "react";
import tw, { css, styled } from "twin.macro";

import { Theme, Header } from "~components";
import { useSize } from "~hooks";

const Container = tw.div`fixed w-[calc(100vw - 2rem)] h-[calc(100vh - 1.25rem)] mx-4 my-2.5 border border-white overflow-hidden mix-blend-difference`;
const Main = styled.main(({ offset }) => [
  tw`relative h-[calc(100vh - 1.25rem - 2px)] pb-2.5  overflow-x-hidden overflow-y-scroll`,
  css`
    padding-top: ${offset}px;
  `
]);

const Layout = ({ children, className }) => {
  const [menuRef, menuSize] = useSize();

  return (
    <div tw="bg-white h-screen">
      <Theme />
      <Container>
        <Header ref={menuRef} />
        <Main className={className} offset={menuSize?.height}>
          {children}
        </Main>
      </Container>
    </div>
  );
};

export default Layout;
