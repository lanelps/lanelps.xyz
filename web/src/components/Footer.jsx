import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

export default function Footer() {
  const date = new Date().getFullYear()
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
  `)

  return (
    <footer>
      <ul className='info'>
        {contactItems.map((contactItem) => {
          console.log(contactItem)
          return (
            <li key={contactItem._key}>
              <span className='title'>{contactItem.title}: </span>
              <a href={contactItem.link} target='_blank'>
                {contactItem.name}
              </a>
            </li>
          )
        })}
      </ul>
      <span>© Lane Le Prevost-Smith {date}</span>
    </footer>
  )
}
