import React, { useState } from 'react';
import { graphql } from 'gatsby';
import tw, { css } from 'twin.macro';
import { useCSSMediaQuery } from '~hooks';

import Layout from '~components/Layout';
import ProjectList from '~components/ProjectList';
import Image from '~components/Image';

const Work = ({ data: { allSanityProjects } }) => {
  const { isMobile } = useCSSMediaQuery();
  const [hovered, setHovered] = useState(null);

  const projects = allSanityProjects.edges.map(({ node }) => node);

  return (
    <Layout title="Work" url="/work">
      <section tw="relative md:sticky md:flex flex-col items-stretch h-full md:h-[calc(100vh - 16rem)] col-start-1 col-span-full md:col-span-6 top-0">
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

      {!isMobile && (
        <section tw="md:col-start-7 col-span-full md:col-span-6">
          {projects.map(project => {
            if (hovered === project.id && project.cover) {
              return <Image image={project.cover} />;
            }
            return null;
          })}
        </section>
      )}
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
