import React from "react";
import tw, { styled } from "twin.macro";

import { Go } from "~components";

const Container = styled.button(({ buttonType }) => [
  tw`relative w-max bg-transparent hover:bg-black dark:hover:bg-white active:bg-transparent text-black hover:text-white dark:hover:text-black active:text-black font-main border hover:border-black dark:hover:border-white active:border-black rounded-[3.5rem] transition-colors`,
  buttonType === 2 && tw`p-2 sm-t:p-3 text-body`,
  buttonType === 3 && tw`py-2 px-3 sm-t:px-4 text-heading sm-t:text-heading-md`
]);

const Button = ({
  children,
  className,
  onClick,
  to,
  variant = 2,
  type = `button`
}) => {
  if (to) {
    return (
      <Go to={to} tw="relative block">
        <Container
          type={type}
          className={className}
          buttonType={variant}
          onClick={onClick}
        >
          {children}
        </Container>
      </Go>
    );
  }
  return (
    <Container
      type={type}
      className={className}
      buttonType={variant}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default Button;
