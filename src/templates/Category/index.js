import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../../components/Layouts/main'
import ArticlePreview from '../../components/ArticlePreview'

import './category.scss'

class CategoryTemplate extends React.Component {
  render() {
    const posts = get(this.props, 'data.allContentfulBlogPost.nodes');

    return (
      <Layout location={this.props.location}>
        <div className="[ category-container ]">
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

