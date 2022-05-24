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
import * as styles from './category.module.css'

class CategoryTemplate extends React.Component {
  render() {
    console.log('cat temp props',this.props);
    const posts = get(this.props, 'data.allContentfulBlogPost.nodes');
    console.log('posts',posts);

    return (
      <Layout location={this.props.location}>
        <div className={styles.container}>
          Category Page
          <ArticlePreview posts={posts} />

        </div>
      </Layout>
    )
  }
}

export default CategoryTemplate

export const pageQuery = graphql`
  query BlogPostByCategory(
    $categorySlug: String!
  ) {
    allContentfulBlogPost(filter: {category: {slug: {eq: $categorySlug}}}) {
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

