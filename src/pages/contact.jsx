import React from "react";
import { graphql } from "gatsby";
import tw from "twin.macro";

import { Layout, Title, ContactForm } from "~components";

const Contact = ({ data: { sanityContactPage } }) => (
  <Layout>
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

export default Contact;

export const query = graphql`
  query Contact {
    sanityContactPage {
      title
      _rawBody
    }
  }
`;

export const Head = () => {
  const seo = {
    title: `Contact`,
    description: ``,
    domain: `https://lanelps.xyz/contact`,
    favicon: {
      mimeType: `image/jpg`,
      url: `/favicon.jpg`
    },
    keywords: [``],
    robots: `index, follow`
  };

  return (
    <>
      <title>{seo?.title}</title>
      <meta name="description" content={seo?.description} />
      <meta name="keywords" content={seo?.keywords} />
      <meta name="robots" content={seo?.robots} />
      <meta name="googlebot" content={seo?.robots} />
      <link rel="canonical" href={seo.domain} />
      <link rel="icon" type={seo?.favicon?.mimeType} href={seo?.favicon?.url} />

      {/* open graph/ twitter */}
      <meta property="og:title" content={seo?.title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={seo?.description} />
      <meta property="og:image" content={seo.image.url} />
      <meta property="og:url" content={seo.domain} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};
