import React from "react";
import tw from "twin.macro";
import { PortableText as BlockContent } from "@portabletext/react";

import serializers from "~utils/serialisers";

const PortableText = ({ className, blocks, serializer }) => {
  if (!blocks) {
    console.error(`Portable Text: Blocks is undefined`);
    return <></>;
  }

  return (
    <div className={className} css={[tw`flex flex-col gap-y-[1.375rem]`]}>
      <BlockContent value={blocks} components={serializer || serializers} />
    </div>
  );
};

export default PortableText;
