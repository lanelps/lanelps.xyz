import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'

const { title, text } = {
  title: 'About',
  text:
    'I am a Full-Stack Web Developer and Graphic Designer from Auckland, New Zealand. I create accessible and fast websites using the latest modern web technologies',
}

const About = () => {
  return (
    <Layout title='About' url='/about' page='about'>
      <Header title={title} text={text} />
    </Layout>
  )
}

export default About
