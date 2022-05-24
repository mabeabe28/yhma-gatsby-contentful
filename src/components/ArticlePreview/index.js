import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from '../Container'
import Tags from '../Tags'
import './article-preview.scss'


const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className="[ article-list ]">
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/${post.category.slug}/${post.slug}`} className="[ link ]">
                <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
                <h2 className="[ title ]">{post.title}</h2>
              </Link>
              <div>
                {post.description?.raw && renderRichText(post.description)}
              </div>
              <div className="[ meta ]">
                <small className="meta">{post.publishDate}</small>
                <Tags tags={post.tags} />
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
