import React, { useState } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function Nav() {
  const pages = [
    { id: 1, url: '/', name: 'Home' },
    { id: 2, url: '/about', name: 'About' },
    { id: 3, url: '/work', name: 'Work' },
    { id: 4, url: '/contact', name: 'Contact' },
    // { id: 5, url: '/experiments', name: 'Experiments' },
  ]

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
  `)

  const [menu, setMenu] = useState(false)

  return (
    <>
      <nav className='nav'>
        <ul>
          {pages.map((page) => (
            <li key={page.id}>
              <Link to={page.url}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <button onClick={() => setMenu(!menu)} className='menu-button' aria-expanded={menu} aria-controls="mobile-menu">{menu ? 'Close' : 'Menu'}</button>
      <div className='mobile-nav' style={{ display: menu ? 'block' : 'none' }}>
        <nav>
          <ul id="mobile-menu">
            {pages.map((page) => (
              <li key={page.id}>
                <Link to={page.url} onClick={() => setMenu(false)}>{page.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <footer className='footer-nav'>
          <ul>
            {contactItems.map((contactItem, index) => {
              return (
                <li key={`${contactItem._key} ${index}`} className="info-m">
                  <a href={contactItem.link} target='_blank' rel='noreferrer'>
                    {contactItem.title}
                  </a>
                </li>
              )
            })}
          </ul>
        </footer>
      </div>
    </>
  )
}
