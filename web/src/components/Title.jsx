import React from "react";
import tw from "twin.macro";

import Go from "./Go";
import PortableText from "./PortableText";

const Title = ({ title, text, _css }) => {
  const serializer = {
    types: {
      block: props => {
        if (props.node.style === `normal`) {
          return <h2 tw="font-main text-heading">{props.children}</h2>;
        }
      }
    },
    marks: {
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
      link: ({ children, mark }) => (
        <Go to={mark.href} newTab _css={[tw``]}>
          {children}
        </Go>
      )
    }
  };

  return (
    <header css={[tw`mb-8`, _css]}>
      <h1 tw="before:(content['$'] absolute left-[-1rem] font-normal text-blue) font-main font-medium mb-2">
        {title}
      </h1>
      <PortableText blocks={text} serializer={serializer} />
    </header>
  );
};

export default Title;
