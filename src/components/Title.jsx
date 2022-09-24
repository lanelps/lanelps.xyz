import React from "react";
import tw from "twin.macro";

import PortableText from "./PortableText";

import { simple } from "../utils/serialisers";

const Title = ({ title, text, className }) => (
  <header className={className} css={[tw`mb-8`]}>
    <h1 tw="before:(content['$'] absolute left-[-1rem] font-normal text-blue) font-main font-medium mb-4 md:mb-2">
      {title}
    </h1>
    <PortableText blocks={text} serializer={simple} />
  </header>
);

export default Title;
