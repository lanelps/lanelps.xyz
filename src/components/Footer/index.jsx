import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import tw, { css } from "twin.macro";

import { Go } from "~components";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer
      css={[
        tw`absolute lg-t:w-[calc(100% - 8rem)] bottom-[1.5rem] flex justify-between`
      ]}
    >
      <ul tw="flex gap-8" />
      <p>
        <span>© Lane Wirihana Le Prevost-Smith </span>
        <time dateTime={date}>{date}</time>
      </p>
    </footer>
  );
};

export default Footer;
