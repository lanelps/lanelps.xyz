export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'text' },
    { name: 'personalBio', title: 'Personal Bio', type: 'text' },
    {
      name: 'imageContainer',
      title: 'Image Container',
      type: 'imageContainer',
    },
  ],
}
