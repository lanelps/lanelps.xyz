import React from 'react'

import Layout from '../components/Layout.jsx'
import Header from '../components/Header'
import ContactDetails from '../components/ContactDetails'
import SendGridForm from '../components/SendGridForm'

const Contact = () => {
  const { title, text } = {
    title: 'Contact',
    text:
      'If you’d like to work with me or for any general enquires please get in contact.',
  }
  return (
    <Layout title='Contact' url='/contact' page='contact'>
      <Header title={title} text={text} />
      <ContactDetails />
      <SendGridForm />
    </Layout>
  )
}

export default Contact
