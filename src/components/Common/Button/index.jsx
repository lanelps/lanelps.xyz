import React from "react";
import tw from "twin.macro";

import { Go } from "~components";

const Container = tw.button`relative w-max py-1 px-2.5 bg-transparent hover:bg-blue active:bg-transparent border rounded-full text-black font-main text-main transition-colors`;

const Button = ({ children, className, onClick, to, type = `button` }) => {
  if (to) {
    return (
      <Go to={to} tw="relative block">
        <Container type={type} className={className} onClick={onClick}>
          {children}
        </Container>
      </Go>
    );
  }
  return (
    <Container type={type} className={className} onClick={onClick}>
      {children}
    </Container>
  );
};

export default Button;
