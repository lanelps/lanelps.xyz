import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ImageContainer from '../components/ImageContainer'
import PortableText from '../components/PortableText'

export const query = graphql`
  query AboutQuery {
    sanityAboutPage {
      title
      personalBio: _rawPersonalBio
      imageContainer {
        title
        description
        year(formatString: "YYYY")
        accessableImage {
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          altText
        }
      }
    }
  }
`

const About = ({ data: { sanityAboutPage: { title, personalBio, imageContainer } } }) => {

  return (
    <Layout title='About' url='/about' page='about'>
      <Header title='About' text={title} />
      <PortableText blocks={personalBio} />
      <ImageContainer
        {...imageContainer}
        image={imageContainer.accessableImage.image}
        altText={imageContainer.accessableImage.altText}
        objectFit='contain'
      />
    </Layout>
  )
}

export default About
