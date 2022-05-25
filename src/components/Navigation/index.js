import React from 'react'
import { Link } from 'gatsby'

import './navigation.scss'

const Navigation = () => (
  <nav role="navigation" className="[ navigation-container ]" aria-label="Main">
    <Link to="/" className="[ logoLink ]">
      <span className="[ logo ]" />
      <span className="[ navigationItem ]">YHMA</span>
    </Link>
    <ul className="[ navigation ]">
      <li className="[ navigationItem ]">
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>
      <li className="[ navigationItem ]">
        <Link to="https://youtube.com/yhma-team" activeClassName="active">
          YouTube
        </Link>
      </li>
      <li className="[ navigationItem ]">
        <Link to="https://instagram.com/youhadme.at" activeClassName="active">
          Instagram
        </Link>
      </li>
      <li className="[ navigationItem ]">
        <Link to="https://archived.youhadme.at" activeClassName="active">
          Archive
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
