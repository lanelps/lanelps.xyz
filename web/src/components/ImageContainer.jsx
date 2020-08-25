import React from 'react'
import Img from 'gatsby-image'

const ImageContainer = ({
  title,
  description,
  year,
  accessableImage,
  objectFit,
}) => {
  return (
    <section className='image-container'>
      <Img
        loading='eager'
        fluid={accessableImage.image.asset.fluid}
        alt={accessableImage.altText}
        className='image-container__image'
        imgStyle={{
          objectFit: `${objectFit || 'cover'}`,
        }}
      />

      {title && (
        <section className='image-container__title'>
          <h3 className='title-cash'>Title</h3>
          <p>{title}</p>
        </section>
      )}

      {description && (
        <section className='image-container__description'>
          <h3 className='title'>Description</h3>
          <p>{description}</p>
        </section>
      )}

      {year && (
        <section className='image-container__year'>
          <h3 className='title'>Year</h3>
          <time dateTime={year}>{year}</time>
        </section>
      )}
    </section>
  )
}

export default ImageContainer
