import React, { useEffect, useContext } from "react";
import tw, { css } from "twin.macro";

import Go from "~components/Go";
import AppContext from "../context/AppContext";

const ProjectList = ({ projects, _css, pathname }) => {
  return (
    <ul
      css={[
        css`
          & > li:last-child {
            margin-bottom: 0;
          }
        `,
        _css,
      ]}
    >
      {projects.map((project, index) => {
        let projectIndex = index + 1;
        if (projectIndex < 10) {
          projectIndex = `0${projectIndex}`;
        }

        let selected;

        if (pathname) {
          if (pathname === `/work/${project.slug.current}`) {
            selected = true;
          } else {
            selected = false;
          }
        }

        return (
          <li key={project.id} tw="mb-2">
            <Go
              to={`/work/${project.slug.current}`}
              _css={[
                tw`w-full flex justify-between font-main text-heading hover:opacity-100`,
                pathname && !selected && tw`opacity-50`,
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
};

export default ProjectList;
