import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout.jsx'
import Header from '../components/Header'
import ContactDetails from '../components/ContactDetails'
import NetlifyForm from '../components/NetlifyForm'

export const query = graphql`
  query ContactQuery {
    sanityContactPage {
      title
    }
  }
`

const Contact = ({
  data: {
    sanityContactPage: { title },
  },
}) => {
  return (
    <Layout title='Contact' url='/contact' page='contact'>
      <Header title='contact' text={title} />
      <ContactDetails />
      <NetlifyForm />
    </Layout>
  )
}

export default Contact
