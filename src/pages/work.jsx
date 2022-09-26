import React, { useState } from "react";
import { graphql } from "gatsby";
import tw, { css } from "twin.macro";

import { Layout, ProjectList, Image } from "~components";

const Work = ({ data: { allSanityProjects } }) => {
  // const [hovered, setHovered] = useState(null);

  const projects = allSanityProjects.edges.map(({ node }) => node);

  return (
    <Layout>
      <section tw="relative lg-t:sticky lg-t:flex flex-col items-stretch h-full lg-t:h-[calc(100vh - 16rem)] col-start-1 col-span-full lg-t:col-span-6 top-0">
        <h1 tw="before:(content['$'] absolute left-[-1rem] font-normal text-blue) font-main font-medium mb-2">
          Work
        </h1>
        <ProjectList
          projects={projects}
          // hovered={setHovered}
          css={[
            tw`overflow-y-scroll`,
            css`
              flex: 1 0 0px;
            `
          ]}
        />
      </section>

      {/* {!isMobile && (
        <section tw="lg-t:col-start-7 col-span-full lg-t:col-span-6">
          {projects.map((project) => {
            if (hovered === project.id && project.cover) {
              return <Image image={project.cover} />;
            }
            return null;
          })}
        </section>
      )} */}
    </Layout>
  );
};

export default Work;

export const query = graphql`
  query Work {
    allSanityProjects(sort: { fields: projectDate, order: DESC }) {
      edges {
        node {
          id
          slug {
            current
          }
          projectName
          projectDate(formatString: "YYYY")
          cover {
            asset {
              gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
            altText
          }
        }
      }
    }
  }
`;

export const Head = () => {
  const seo = {
    description: ``,
    domain: `https://lanelps.xyz/work`,
    favicon: {
      mimeType: `image/jpg`,
      url: `/favicon.jpg`
    },
    image: ``,
    keywords: [``],
    robots: `index, follow`,
    title: `Work`
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
