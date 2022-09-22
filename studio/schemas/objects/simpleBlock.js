export default {
  title: "Simple Block Content",
  name: "simpleBlock",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [{ title: "Normal", value: "normal" }],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Number", value: "number" }
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" }
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "string"
              }
            ]
          },
          {
            title: "Translate",
            name: "translate",
            type: "object",
            fields: [
              {
                title: "Text",
                name: "text",
                type: "string"
              }
            ]
          }
        ]
      }
    }
  ]
};
