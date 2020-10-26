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
          return (
            <>
              <li key={contactItem._key} className="info-d">
                <span className='title'>{contactItem.title}: </span>
                <a href={contactItem.link} target='_blank' rel='noreferrer'>
                  {contactItem.name}
                </a>
              </li>

              <li key={contactItem._key} className="info-m">
                <a href={contactItem.link} target='_blank' rel='noreferrer'>
                  {contactItem.title}
                </a>
              </li>
            </>
          )
        })}
      </ul>
      <span>
        © Lane Le Prevost-Smith <time dateTime={date}>{date}</time>
      </span>
    </footer>
  )
}
