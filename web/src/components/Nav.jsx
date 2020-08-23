import React from 'react'
import { Link } from 'gatsby'

export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/work'>Work</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/services'>Services</Link>
        </li>
        <li>
          <Link to='/experiments'>Experiments</Link>
        </li>
      </ul>
    </nav>
  )
}
