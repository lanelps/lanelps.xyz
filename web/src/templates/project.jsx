import React from "react";
import { graphql } from "gatsby";
import tw, { css } from "twin.macro";

import Layout from "~components/Layout";
import ProjectList from "~components/ProjectList";
import Image from "~components/Image";
import PortableText from "~components/PortableText";

const Project = ({ data: { sanityProjects, allSanityProjects }, location }) => {
  const projects = allSanityProjects.edges.map(({ node }) => node);

  return (
    <Layout title="Work" url="/work">
      <section tw="sticky flex flex-col items-stretch h-[calc(100vh - 16rem)] col-start-1 col-span-6 top-0">
        <h1 tw="before:(content['$'] absolute left-[-1rem] font-normal text-blue) font-main font-medium mb-2">
          Work
        </h1>
        <ProjectList
          projects={projects}
          _css={[
            tw`overflow-y-scroll`,
            css`
              flex: 1 0 0px;
            `,
          ]}
          pathname={location.pathname}
        />
      </section>

      <section tw="col-start-7 col-span-6">
        <header css={[tw`relative w-full flex gap-8 mb-8`]}>
          <h2 tw="font-medium w-[calc((100% / 6) - 1rem)]">
            {sanityProjects.projectName}
          </h2>
          <PortableText
            blocks={sanityProjects._rawProjectDescription}
            _css={[tw`w-[calc((100% / 6) * 4 + 2rem)]`]}
          />
          <time tw="w-[calc((100% / 6) - 1rem)]">
            {sanityProjects.projectDate}
          </time>
        </header>

        {sanityProjects?.images[0] && (
          <ul tw="relative w-full">
            {sanityProjects.images.map((image) => (
              <li key={image._key} tw="mb-8">
                <figure>
                  <Image image={image} />
                </figure>
              </li>
            ))}
          </ul>
        )}
      </section>
    </Layout>
  );
};

export default Project;

export const query = graphql`
  query ProjectQuery($id: String!) {
    sanityProjects(id: { eq: $id }) {
      projectName
      _rawProjectDescription
      projectDate(formatString: "YYYY")
      images {
        _key
        asset {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
        altText
      }
    }
    #

    allSanityProjects(sort: { fields: projectDate, order: DESC }) {
      edges {
        node {
          id
          slug {
            current
          }
          projectName
          projectDate(formatString: "YYYY")
        }
      }
    }
  }
`;
