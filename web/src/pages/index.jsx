import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout.jsx'
import Header from '../components/Header'
import Video from '../components/Video'

export const query = graphql`
  {
    sanityHomePage {
      title
      text
      showReel {
        asset {
          url
        }
      }
    }
  }
`

const Home = ({ data: { sanityHomePage } }) => {

  return (
    <Layout title='Home' url='/' page='home'>
      <div className='container-1'>
        <Header title={sanityHomePage.title} text={sanityHomePage.text} />
      </div>
      <div className='container-2'>
        <Video src={sanityHomePage.showReel.asset.url} />
      </div>
    </Layout>
  )
}

export default Home
