import React from 'react'
import Img from 'gatsby-image'

import PortableText from './PortableText'

const ImageContainer = ({ title, description, year, image, altText, objectFit, display = '' }) => {

  return (
    <section className='image-container' style={{ display: display }}>
      {image && (
        <Img
          loading='eager'
          fluid={image.asset.fluid}
          alt={altText}
          className='image-container__image'
          imgStyle={{
            objectFit: `${objectFit || 'cover'}`,
          }}
        />
      )}

      {title && (
        <div className='image-container__title'>
          <h3 className='title-cash'>Title</h3>
          <p>{title}</p>
        </div>
      )}

      {description && (
        <div className='image-container__description'>
          <h3 className='title'>Description</h3>
          <PortableText blocks={description} />
        </div>
      )}

      {year && (
        <div className='image-container__year'>
          <h3 className='title'>Year</h3>
          <time dateTime={year}>{year}</time>
        </div>
      )}
    </section>
  )
}

export default ImageContainer
