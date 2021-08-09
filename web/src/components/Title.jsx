import React from "react";
import tw from "twin.macro";

const Title = ({ title, text, _css }) => {
  return (
    <header css={[tw`mb-8`, _css]}>
      <h1 tw="before:(content['$'] absolute left-[-1rem] font-normal text-blue) font-main font-medium mb-2">
        {title}
      </h1>
      <h2 tw="font-main text-heading whitespace-pre-line">{text}</h2>
    </header>
  );
};

export default Title;
