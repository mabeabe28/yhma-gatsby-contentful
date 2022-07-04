import React from 'react'
import { Link } from 'gatsby'

import FadeIn from 'react-fade-in';
import './navigation.scss'

const Navigation = () => (
  <nav role="navigation" className="[ navigation-container ]" aria-label="Main">
    <div className="[ navigation-wrapper ]">

      <div className="[ main-nav ]">
        <Link to="/" className="[ logoLink ]">
          <span className="[ logo ]" />
          <span className="[ navigationItem ]">YHMA</span>
        </Link>
        <FadeIn className="[ navigation ]">
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
        </FadeIn>
      </div>
      <div className="[ nav-content ]">
          <FadeIn className="[ title ]" transitionDuration={500}>
            YHMA
          </FadeIn>
          <FadeIn className="[ tagline ]" transitionDuration={1000} delay={200}>
            <span><em>(acronym)</em> - <strong>You Had Me At</strong></span>
            <span>a group of friends sharing their lifestyle content online</span>
          </FadeIn>
      </div>

    </div>
  </nav>
)

export default Navigation
