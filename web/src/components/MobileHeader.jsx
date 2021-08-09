import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Go from "../components/Go";

const MobileHeader = () => {
  const {
    sanityContactDetails: { contactItems },
  } = useStaticQuery(graphql`
    query ContactDetailsMobileNav {
      sanityContactDetails {
        contactItems {
          _key
          title
          name
          link
        }
      }
    }
  `);

  const [menu, setMenu] = useState(false);

  return (
    <>
      <section
        className="mobile-nav"
        style={{ display: menu ? "block" : "none" }}
      >
        <nav>
          <ul id="mobile-menu">
            {pages.map((page) => (
              <li key={page.id}>
                <Go to={page.url} onClick={() => setMenu(false)}>
                  {page.name}
                </Go>
              </li>
            ))}
          </ul>
        </nav>
        <footer className="footer-nav">
          <ul>
            {contactItems.map((contactItem, index) => {
              return (
                <li key={`${contactItem._key} ${index}`} className="info-m">
                  <Go to={contactItem.link} newTab>
                    {contactItem.title}
                  </Go>
                </li>
              );
            })}
          </ul>
        </footer>
      </section>

      <button
        onClick={() => setMenu(!menu)}
        className="menu-button"
        aria-expanded={menu}
        aria-controls="mobile-menu"
      >
        {menu ? "Close" : "Menu"}
      </button>
    </>
  );
};

export default MobileHeader;
