import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const ContactDetails = () => {
  const {
    sanityContactDetails: { contactItems }
  } = useStaticQuery(graphql`
    query ContactDetails {
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
    <ul className="contact__detials">
      {contactItems.map((contactItem) => (
        <li key={contactItem._key}>
          <h3>
            <b>{contactItem.title}: </b>
            <a href={contactItem.link} target="_blank" rel="noreferrer">
              {contactItem.name}
            </a>
          </h3>
        </li>
      ))}
    </ul>
  );
};

export default ContactDetails;
