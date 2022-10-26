export default {
  name: `aboutPage`,
  title: `About Page`,
  type: `document`,
  fields: [
    {
      name: `title`,
      title: `Title`,
      type: `string`
    },
    {
      name: `body`,
      title: `Body`,
      type: `blockContent`
    },
    {
      name: `image`,
      title: `Image`,
      type: `altImage`
    },
    {
      name: `media`,
      title: `Media`,
      type: `media`
    }
  ]
};
