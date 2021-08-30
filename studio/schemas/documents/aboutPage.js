export default {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "Body",
      title: "Text",
      type: "simpleBlock"
    },
    {
      name: "personalBio",
      title: "Personal Bio",
      type: "blockContent"
    },
    {
      name: "image",
      title: "Image",
      type: "altImage"
    }
  ]
};
