import React from "react";
import { graphql } from "gatsby";
import tw from "twin.macro";

import Layout from "~components/Layout";
import Title from "~components/Title";

const Contact = ({ data }) => {
  const {
    sanityContactPage: { title },
  } = data;

  return (
    <Layout title="Contact" url="/contact">
      <section tw="sticky block h-min col-start-1 col-span-6 top-0">
        <Title title="Contact" text={title} />
      </section>
    </Layout>
  );
};

export default Contact;

export const query = graphql`
  query Contact {
    sanityContactPage {
      title
    }
  }
`;
