import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import readingTime from 'reading-time'
import ArticlePreview from '../../components/ArticlePreview'

import Seo from '../../components/Seo'
import Layout from '../../components/Layouts/main'
import Hero from '../../components/Hero'
import Tags from '../../components/Tags'
import * as styles from './person.module.css'

class PersonTemplate extends React.Component {

  
  render() {
    console.log('cat temp props',this.props);
    const posts = get(this.props, 'data.allContentfulBlogPost.nodes');
    console.log('posts',posts);
    console.log('props',this.props);
    return (
      <Layout location={this.props.location}>
        <div className={styles.container}>
          Person Page
          <ArticlePreview posts={posts} />

        </div>
      </Layout>
    )
  }
}

export default PersonTemplate

export const pageQuery = graphql`
  query BlogPostByPerson(
    $personSlug: String!
  ) {
    allContentfulBlogPost(filter: {author: {slug: {eq: $personSlug}}}) {
      nodes{
        title
        slug
        category {
          name
          slug
        }
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
  }
`
