import React from "react";
import tw from "twin.macro";

import { Theme, Header } from "~components";

const Container = tw.div`fixed w-[calc(100vw - 2rem)] h-[calc(100vh - 1.25rem)] mx-4 my-2.5 border border-white overflow-hidden mix-blend-difference`;
const Main = tw.main`relative h-[calc(100vh - 1.25rem - 2px)] pt-[2.6875rem] pb-2.5  overflow-x-hidden overflow-y-scroll`;

const Layout = ({ children, className }) => (
  <div tw="bg-white h-screen">
    <Theme />
    <Container>
      <Header />
      <Main className={className}>{children}</Main>
    </Container>
  </div>
);

export default Layout;
