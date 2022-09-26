import React from "react";
import tw from "twin.macro";

import { Theme, Header } from "~components";

const Container = tw.div`fixed w-[calc(100vw - 2rem)] h-[calc(100vh - 1.25rem)] mx-4 my-2.5 pb-2.5 border overflow-y-scroll`;
const Main = tw.main`mt-[53px]`;

const Layout = ({ children, className }) => (
  <>
    <Theme />
    <Container>
      <Header />
      <Main className={className}>{children}</Main>
    </Container>
  </>
);

export default Layout;
