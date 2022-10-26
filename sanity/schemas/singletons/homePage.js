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
      name: `showReel`,
      title: `Show Reel`,
      type: `file`
    },
    {
      name: `media`,
      title: `Media`,
      type: `media`
    }
  ]
};
