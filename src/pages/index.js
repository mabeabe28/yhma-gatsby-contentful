import React from 'react'
import { graphql } from 'gatsby'
//import get from 'lodash/get'

import Layout from '../components/Layouts/main'
import { theme } from '../components/Theme/global';
import { ThemeProvider } from 'styled-components';

class RootIndex extends React.Component {
  render() {
    // const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    // const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <ThemeProvider theme={theme}>
        <Layout location={this.props.location}>
          {/* <Wrapper>
            <Hero color='blue'>
            </Hero>
            <Content darkMode={true}>
            </Content>
          </Wrapper> */}
        </Layout>
      </ThemeProvider>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      nodes {
        name
        shortBio {
          raw
        }
        title
        heroImage: image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 1180
          )
        }
      }
    }
  }
`
