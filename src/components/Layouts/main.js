import React from 'react'

import { theme } from '../Theme/global';
import { ThemeProvider } from 'styled-components';

import Seo from '../Seo'
import Navigation from '../Navigation'
import Footer from '../Footer'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <ThemeProvider theme={theme}>
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    )
  }
}

export default Template
