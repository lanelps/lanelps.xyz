export default {
  title: 'Image',
  name: 'accessableImage',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'mainImage',
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
