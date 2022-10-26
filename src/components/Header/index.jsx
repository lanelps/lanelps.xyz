import React, { forwardRef } from "react";
import tw, { styled, css } from "twin.macro";

import { Go } from "~components";
import { useSize, useApp } from "~hooks";

const Container = tw.nav`px-3 bg-black md-t:bg-transparent z-30`;
const Wrapper = tw.div`flex justify-between h-min py-2.5`;
const LinkList = tw.ul`relative flex gap-x-10`;
// const ThemeButton = tw.button`font-main text-main text-white hover:(italic text-orange)`;

const Header = forwardRef((props, ref) => {
  const links = [
    { id: 1, url: `/`, name: `Home` },
    { id: 2, url: `/about`, name: `About` },
    { id: 3, url: `/work`, name: `Work` },
    { id: 4, url: `/contact`, name: `Contact` }
  ];

  //

  return (
    <Container ref={ref}>
      <MenuDesktop links={links} />
      <Menumobile links={links} />
    </Container>
  );
});

export default Header;

const MenuDesktop = ({ links }) => (
  <Wrapper tw="hidden md-t:block border-b border-white animate-appear">
    <LinkList>
      {links.map((link) => (
        <li key={link.id}>
          <Go to={link.url}>{link.name}</Go>
        </li>
      ))}
    </LinkList>

    {/* <ThemeButton type="button">Light</ThemeButton> */}
  </Wrapper>
);

const LinksWrapper = styled.div(({ active, height }) => [
  tw`relative w-full h-0 overflow-hidden transition-[height]`,
  active &&
    css`
      height: ${height}px;
    `
]);
const Links = tw.ul`relative w-full flex flex-col gap-y-5 py-2.5`;

const Menumobile = ({ links }) => {
  const [linksRef, linksSize] = useSize();
  const { menuActive, setMenuActive } = useApp();

  return (
    <div tw="block md-t:hidden border-b border-white overflow-hidden animate-appear">
      <Wrapper>
        <button
          type="button"
          css={[
            tw`font-main text-main text-white`,
            menuActive && tw`text-orange italic`
          ]}
          onClick={() => setMenuActive(!menuActive)}
        >
          {menuActive ? `Close` : `Menu`}
        </button>
        {/* <ThemeButton type="button">Light</ThemeButton> */}
      </Wrapper>

      <LinksWrapper active={menuActive} height={linksSize?.height}>
        <Links ref={linksRef}>
          {links.map((link) => (
            <li key={link.id}>
              <Go to={link.url}>{link.name}</Go>
            </li>
          ))}
        </Links>
      </LinksWrapper>
    </div>
  );
};
