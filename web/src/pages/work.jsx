import React from "react";
import { graphql } from "gatsby";
import tw, { css } from "twin.macro";

import Layout from "~components/Layout";
import Title from "~components/Title";
import ProjectList from "~components/ProjectList";

const Work = ({ data: { allSanityProjects } }) => {
  const projects = allSanityProjects.edges.map(({ node }) => node);

  // const projects = Array(50).fill({
  //   projectName: `Test Project`,
  //   projectDate: `2021`,
  //   slug: {
  //     current: `test`,
  //   },
  // });

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
        />
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
        }
      }
    }
  }
`;
