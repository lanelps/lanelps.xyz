import React from "react";
import tw, { css } from "twin.macro";

import { Go } from "~components";

const Header = () => {
  const links = [
    { id: 1, url: `/`, name: `Home` },
    { id: 2, url: `/about`, name: `About` },
    { id: 3, url: `/work`, name: `Work` },
    { id: 4, url: `/contact`, name: `Contact` }
  ];

  return (
    <nav
      css={[
        tw`absolute w-[calc(100% - 8rem)] top-[1.5rem] grid grid-cols-12 gap-8 px-16`
      ]}
    >
      <ul css={[tw`relative col-start-3 col-span-6 grid grid-cols-6 gap-8`]}>
        {links.map((link) => (
          <li key={link.id} css={[tw`col-span-1`]}>
            <Go to={link.url}>{link.name}</Go>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
