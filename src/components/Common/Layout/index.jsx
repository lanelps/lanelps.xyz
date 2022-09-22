import React from "react";
import tw from "twin.macro";

import { Theme } from "~components";

const Layout = ({ children, className }) => (
  <>
    <Theme />
    <div css={tw`flex`}>
      <main className={className}>{children}</main>
    </div>
  </>
);

export default Layout;
