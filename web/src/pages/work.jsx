import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'

const { title, text } = {
  title: 'Work',
  text: 'Work will eventually be here',
}

const Experiments = () => {
  return (
    <Layout title='Work' url='/work' page='work'>
      <div className='container-1'>
        <Header title={title} text={text} />
      </div>
      <div className='container-2'></div>
    </Layout>
  )
}

export default Experiments
