import React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
  const pages = [
    { id: 1, url: '/', name: 'Home' },
    { id: 2, url: '/about', name: 'About' },
    { id: 3, url: '/work', name: 'Work' },
    { id: 4, url: '/contact', name: 'Contact' },
    { id: 5, url: '/experiments', name: 'Experiments' },
  ]
  return (
    <nav className='nav'>
      <ul>
        {pages.map((page) => (
          <li key={page.id}>
            <Link to={page.url}>{page.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
