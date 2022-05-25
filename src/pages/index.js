import React from 'react'
import { graphql } from 'gatsby'
//import get from 'lodash/get'

import Layout from '../components/Layouts/main'
import FadeIn from 'react-fade-in';

import './homepage.scss'
// import Hero from '../components/Hero'
// import ArticlePreview from '../components/ArticlePreview'

class RootIndex extends React.Component {
  render() {
    // const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    // const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <div
          className="[ homepage container-full ]"
        >
          <div className="[ homepage-hero ]">
            <div className="[ homepage-hero-left section ]">
              <div className="[ content ]">
                  <FadeIn className="[ title ]" transitionDuration={500}>
                    YHMA
                  </FadeIn>
                  <FadeIn className="[ tagline ]" transitionDuration={1000} delay={200}>
                    <span><strong>You Had Me At</strong></span>
                    <span>a group of friends sharing their lifestyle content online</span>
                    <span><em><strong>new site coming soon</strong></em></span>
                  </FadeIn>
               

              </div>
              
            </div>
            <div className="[ homepage-hero-right section ]">

              
            </div>
          </div>
            
            
        </div>
      </Layout>
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
