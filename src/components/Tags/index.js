import React from 'react'
import './tags.scss'

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <small className="[ tags ]">
      {tags.map((tag) => (
        <div key={tag} className="[ tag ]">
          {tag}
        </div>
      ))}
    </small>
  )

export default Tags
