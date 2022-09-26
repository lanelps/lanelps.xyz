import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import tw, { css } from "twin.macro";

import { Layout, ProjectList, Grid, Image } from "~components";

const Figure = tw.figure`w-full absolute col-start-2 col-span-2 z-[-1]`;

const Work = ({ data: { allSanityProjects } }) => {
  const projects = allSanityProjects.edges.map(({ node }) => node);

  const [hovered, setHovered] = useState(null);
  const [activeImage, setActiveImage] = useState(projects?.[0]?.cover);

  useEffect(() => {
    if (!hovered) return;

    const newActiveImage = projects.filter(
      (project) => project?.id === hovered
    )[0];

    setActiveImage(newActiveImage?.cover);
  }, [hovered, projects]);

  return (
    <Layout>
      <Grid>
        <ProjectList
          projects={projects}
          hovered={setHovered}
          tw="col-span-full"
        />

        <Figure>
          <Image image={activeImage} />
        </Figure>
      </Grid>
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
