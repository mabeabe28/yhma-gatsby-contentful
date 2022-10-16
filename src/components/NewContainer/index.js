import React from 'react'
import './container.scss'

const Container = ({ children, as = 'div' }) => {
  const Tag = as

  return (
    <Tag
      className="[ container ]"
    >
      {children}
    </Tag>
  )
}

export default Container
