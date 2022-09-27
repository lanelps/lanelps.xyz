import React from "react";
import tw, { css } from "twin.macro";

import { Go } from "~components";

const Container = tw.ul`relative w-full overflow-y-scroll`;
const Project = tw.li`relative w-full border-b border-white hover:border-orange transition-colors mix-blend-difference`;

const ProjectList = ({ projects, className, hovered }) => (
  <Container
    className={className}
    css={[
      css`
        & > li:last-child {
          margin-bottom: 0;
        }
      `
    ]}
  >
    {projects.map((project, index) => {
      let projectIndex = index;
      if (projectIndex < 10) {
        projectIndex = `0${projectIndex}`;
      }

      return (
        <Project
          key={project?.id}
          onPointerEnter={() => hovered(project?.id)}
          onPointerLeave={() => hovered(null)}
        >
          <Go
            to={`/work/${project?.slug?.current}`}
            css={[
              tw`w-full flex justify-between py-2.5 font-main text-main text-white hover:text-orange uppercase`
            ]}
          >
            <div tw="flex gap-x-2.5">
              <span>{projectIndex}</span>
              <h3>{project?.projectName}</h3>
            </div>
            <time>{project?.projectDate}</time>
          </Go>
        </Project>
      );
    })}
  </Container>
);

export default ProjectList;
