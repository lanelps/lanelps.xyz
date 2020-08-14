import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'

const { title, text } = {
  title: 'Experiments',
  text: 'Work will eventually be here',
}

const Experiments = () => {
  return (
    <Layout title='Experiments' url='/experiments' page='experiments'>
      <Header title={title} text={text} />
    </Layout>
  )
}

export default Experiments
