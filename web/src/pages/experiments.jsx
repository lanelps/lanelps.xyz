import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'

const { title, text } = {
  title: 'Experiments',
  text:
    'This is a collection of interactive experiments I create in my spare time. The languages and libraries used to create these are Css, Three.js, WebGL & P5.js.',
}

const Experiments = () => {
  return (
    <Layout title='Experiments' url='/experiments' page='experiments'>
      <div className='container-1'>
        <Header title={title} text={text} />
      </div>
      <div className='container-2'></div>
    </Layout>
  )
}

export default Experiments
