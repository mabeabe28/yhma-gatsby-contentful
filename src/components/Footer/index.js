import React from 'react'

import './footer.scss'
import Container from '../Container'

const Footer = () => (
  <Container as="footer">
    <div className="[ footer-container ]">
      YHMA - Custom Built by Paolo Abeabe using <a href="https://contentful.com/">Contentful</a> and{' '}
      <a href="https://gatsbyjs.com">Gatsby</a> &middot;{' '}
    </div>
  </Container>
)

export default Footer
