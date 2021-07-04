export default {
  title: 'Image',
  name: 'accessableImage',
  type: 'object',
  fields: [
    {
      title: 'Photo',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Alt Text',
      name: 'altText',
      type: 'string',
      description:
        'A short description of the image that helps with accessibility and SEO',
      validation: (Rule) => Rule.required(),
    },
  ],
}
