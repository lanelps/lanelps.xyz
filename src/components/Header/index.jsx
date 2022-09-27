import React from "react";
import tw from "twin.macro";

import { Go } from "~components";

const Container = tw.nav`fixed top-2.5 w-[calc(100% - 2rem - 2px)] px-3 z-30 mix-blend-difference`;
const Wrapper = tw.div`flex justify-between h-min py-2.5 bg-black md-t:bg-transparent border-b border-white`;
const LinkList = tw.ul`relative flex gap-x-10`;
const ThemeButton = tw.button`font-main text-main text-white hover:(italic text-orange)`;

const Header = () => {
  const links = [
    { id: 1, url: `/`, name: `Home` },
    { id: 2, url: `/about`, name: `About` },
    { id: 3, url: `/work`, name: `Work` },
    { id: 4, url: `/contact`, name: `Contact` }
  ];

  return (
    <Container>
      <Wrapper>
        <LinkList>
          {links.map((link) => (
            <li key={link.id}>
              <Go to={link.url}>{link.name}</Go>
            </li>
          ))}
        </LinkList>

        <ThemeButton type="button">Light</ThemeButton>
      </Wrapper>
    </Container>
  );
};

export default Header;
