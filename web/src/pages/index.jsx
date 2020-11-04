import React from 'react'
import { graphql, Link } from 'gatsby'

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
      <Header title={sanityHomePage.title} text={sanityHomePage.text} />
      <Link to='/work' className='arrow'>
        See more
      </Link>
      <Video src={sanityHomePage.showReel.asset.url} />
    </Layout>
  )
}

export default Home
