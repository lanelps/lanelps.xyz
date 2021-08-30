import React, { useState } from "react";
import { graphql } from "gatsby";
import tw, { css } from "twin.macro";

import Layout from "~components/Layout";
import ProjectList from "~components/ProjectList";
import Image from "~components/Image";

const Work = ({ data: { allSanityProjects } }) => {
  const projects = allSanityProjects.edges.map(({ node }) => node);

  const [hovered, setHovered] = useState(null);

  return (
    <Layout title="Work" url="/work">
      <section tw="sticky flex flex-col items-stretch h-[calc(100vh - 16rem)] col-start-1 col-span-6 top-0">
        <h1 tw="before:(content['$'] absolute left-[-1rem] font-normal text-blue) font-main font-medium mb-2">
          Work
        </h1>
        <ProjectList
          projects={projects}
          hovered={setHovered}
          _css={[
            tw`overflow-y-scroll`,
            css`
              flex: 1 0 0px;
            `
          ]}
        />
      </section>

      <section tw="col-start-7 col-span-6">
        {projects.map(project => {
          if (hovered === project.id && project.cover) {
            return <Image image={project.cover} />;
          }
          return null;
        })}
      </section>
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
