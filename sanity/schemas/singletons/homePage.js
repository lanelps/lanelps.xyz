export default {
  name: `homePage`,
  title: `Home`,
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
      name: `media`,
      title: `Media`,
      type: `media`
    }
  ]
};
