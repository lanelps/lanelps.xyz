import React from 'react';
import { graphql } from 'gatsby';
import tw from 'twin.macro';

import Layout from '~components/Layout';
import Title from '~components/Title';
import ContactForm from '~components/ContactForm';

const Contact = ({ data: { sanityContactPage } }) => {
  return (
    <Layout title="Contact" url="/contact">
      <section tw="relative md:sticky block h-min col-start-1 col-span-full md:col-span-6 top-0">
        <Title
          title={sanityContactPage.title}
          text={sanityContactPage._rawBody}
        />
      </section>

      <section tw="md:col-start-7 col-span-full md:col-span-6">
        <ContactForm />
      </section>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query Contact {
    sanityContactPage {
      title
      _rawBody
    }
  }
`;
