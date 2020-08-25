import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'

const { title, text } = {
  title: 'Services',
  text:
    'Web design, Web Development, e-commerce websites or other web based stuff.',
}

const Services = () => {
  return (
    <Layout title='Services' url='/services' page='services'>
      <div className='container-1'>
        <Header title={title} text={text} />
      </div>
      <div className='container-2'></div>
    </Layout>
  )
}

export default Services
