import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { css } from 'twin.macro';

import defaultSerialiser from '../utils/serialisers';

const PortableText = ({ blocks, serializer, _css }) => {
  //

  if (blocks) {
    return (
      <BlockContent
        css={[
          _css,
          css`
            & > * {
              margin-bottom: 1rem;
            }

            & > *:last-child {
              margin-bottom: 0;
            }
          `
        ]}
        blocks={blocks}
        serializers={serializer || defaultSerialiser}
      />
    );
  } else {
    console.error(`Portable Text: Blocks is undefined`);
    return null;
  }
};

export default PortableText;
