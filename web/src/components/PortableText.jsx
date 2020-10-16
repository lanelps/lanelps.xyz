import React from 'react'
import BlockContent from '@sanity/block-content-to-react'

const serializers = {
  marks: {
    link: ({ children, mark }) => (
      <a href={mark.href} target="_blank" rel='noopener noreferrer'>
        {children}
      </a>
    )
  }
}

const PortableText = ({ blocks }) => {
  return (
    <BlockContent blocks={blocks} serializers={serializers} />
  )
}

export default PortableText
