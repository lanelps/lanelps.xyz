import React from 'react'

import Layout from '../components/Layout.jsx'
import Header from '../components/Header'
// import Card from "../components/Card"
// import Video from "../components/Video"
// import Mobile from "../components/Mobile"

const Home = () => {
  const { title, text } = {
    title: 'Lane Wirihana Le Prevost-Smith',
    text:
      'I am a freelance Full-Stack Web Developer and Graphic Designer from Auckland, New Zealand. I create accessible and fast websites using the latest modern web technologies.',
  }

  return (
    <Layout title='Home' url='/' page='home'>
      <div className='container-1'>
        <Header title={title} text={text} />
      </div>
      <div className='container-2'></div>
    </Layout>
  )
}

export default Home
