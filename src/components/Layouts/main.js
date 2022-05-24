import React from 'react'


import Seo from '../Seo'
import Navigation from '../Navigation'
import Footer from '../Footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
