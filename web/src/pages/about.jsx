import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ImageContainer from '../components/ImageContainer'

export const query = graphql`
  query AboutQuery {
    sanityAboutPage {
      title
      personalBio
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

const About = ({
  data: {
    sanityAboutPage: { title, personalBio, imageContainer },
  },
}) => {
  return (
    <Layout title='About' url='/about' page='about'>
      <div className='container-1'>
        <Header title='About' text={title} />
        <section className='about__description'>
          <p>{personalBio}</p>
        </section>
      </div>
      <div className='container-2'>
        <ImageContainer {...imageContainer} objectFit='contain' />
      </div>
    </Layout>
  )
}

export default About
