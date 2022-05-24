import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import './hero.scss'

const Hero = ({ image, title, content }) => (
  <div className="[ hero ]">
    {image && (
      <GatsbyImage className="[ image ]" alt={title} image={image} />
    )}
    <div className="[ details ]">
      <h1 className="[ title ]">{title}</h1>
      {content && (
        <div className="[ content ]">{renderRichText(content)}</div>
      )}
    </div>
  </div>
)

export default Hero
