import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import tw, { css } from "twin.macro";

const Go = ({ children, debug, _css, onClick, newTab, parameters, to }) => {
  const [parameterString, setParameterString] = useState(``);

  const styles = [
    tw`hover:text-blue border-b border-transparent hover:border-blue`,
    css`
      transition: color 0.4s, border-color 0.4s, background-color 0.4s,
        opacity 0.4s;

      :hover {
        transition: color 0s, border-color 0s, background-color 0s;
      }
    `,
    _css,
  ];

  useEffect(() => {
    if (!parameters || !Object.keys(parameters)?.[0]) {
      return;
    }

    let newParameterString = ``;

    Object.keys(parameters).forEach((key) => {
      const parameter = parameters[key];

      if (!key || typeof key !== `string` || key === ``) {
        console.error(`[Go.jsx] Invalid key: ${key}`);
        return;
      }

      if (!parameter || typeof parameter !== `string` || parameter === ``) {
        console.error(`[Go.jsx] Invalid parameter: ${parameter}`);
        return;
      }

      newParameterString += `${
        newParameterString === `` ? `?` : `&`
      }${key}=${parameter}`;
    });

    setParameterString(newParameterString);
  }, [parameters]);

  useEffect(() => {
    if (debug) {
      console.log(`parameters: `, parameterString);
    }
  }, [parameterString]);

  //

  const href = `${to}${parameterString !== `` ? parameterString : ``}`;

  let link;

  if (
    href.includes(`http`) ||
    href.includes(`mailto:`) ||
    href.includes(`tel:`)
  ) {
    link = (
      <a
        href={href}
        onClick={onClick}
        rel={newTab ? `noopener noreferrer` : ``}
        target={newTab ? `_blank` : ``}
        css={styles}
      >
        {children}
      </a>
    );
  } else {
    link = (
      <Link to={href} css={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return <>{link}</>;
};

export default Go;
