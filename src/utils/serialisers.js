import React from "react";
import tw, { styled } from "twin.macro";

import { Go } from "~components";

const UnOrderedList = styled.ul`
  padding-left: 1.5ch;
  list-style: outside disc;

  p {
    display: inline;
  }
`;

const OrderedList = styled.ol`
  padding-left: 1.5ch;
  list-style: outside disc;

  p {
    display: inline;
  }
`;

const ListItem = styled.li`
  margin-bottom: 0.25rem;
`;

export default {
  block: {
    normal: ({ children }) => <p tw="font-main text-main">{children}</p>,
    small: ({ children }) => (
      <>
        <br />
        <p tw="font-main text-main">{children}</p>
      </>
    )
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    sup: ({ children }) => <sup>{children}</sup>,
    sub: ({ children }) => <sub>{children}</sub>,
    link: ({ children, value }) => (
      <Go to={value?.href} newTab css={[tw`underline`]}>
        {children}
      </Go>
    )
  },
  list: ({ type, children }) => {
    if (type === `bullet`) {
      return <UnOrderedList>{children}</UnOrderedList>;
    }
    return <OrderedList>{children}</OrderedList>;
  },
  listItem: ({ children }) => <ListItem>{children}</ListItem>
};
