import React from "react";
import tw, { css } from "twin.macro";

import { Go } from "~components";

const ProjectList = ({ projects, className, hovered }) => (
  <ul
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
      let projectIndex = index + 1;
      if (projectIndex < 10) {
        projectIndex = `0${projectIndex}`;
      }

      return (
        <li
          key={project.id}
          tw="mb-2"
          onMouseEnter={() => hovered(project.id)}
          onMouseLeave={() => hovered(null)}
        >
          <Go
            to={`/work/${project.slug.current}`}
            css={[
              tw`w-full flex justify-between font-main text-heading lg-t:text-heading-md hover:opacity-100`
            ]}
          >
            <div tw="flex gap-[1ch]">
              <span>{projectIndex}</span>
              <h3>{project.projectName}</h3>
            </div>
            <time>{project.projectDate}</time>
          </Go>
        </li>
      );
    })}
  </ul>
);

export default ProjectList;
