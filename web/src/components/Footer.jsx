import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import tw, { css } from 'twin.macro';

import Go from '../components/Go';

export default function Footer() {
  const date = new Date().getFullYear();
  const {
    sanityContactDetails: { contactItems },
  } = useStaticQuery(graphql`
    query ContactDetailsFooter {
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

  return (
    <footer
      css={[
        tw`absolute md:w-[calc(100% - 8rem)] bottom-[1.5rem] flex justify-between`,
      ]}
    >
      <ul tw="flex gap-8">
        {contactItems.map((contactItem, index) => {
          return (
            <li
              key={contactItem._key}
              tw="first-of-type:before:(content['$'] relative mr-[.5ch] text-blue)"
            >
              <h3 tw="font-medium inline">{contactItem.title}: </h3>
              <Go to={contactItem.link} newTab>
                {contactItem.name}
              </Go>
            </li>
          );
        })}
      </ul>
      <p>
        <span>© Lane Wirihana Le Prevost-Smith </span>
        <time dateTime={date}>{date}</time>
      </p>
    </footer>
  );
}
