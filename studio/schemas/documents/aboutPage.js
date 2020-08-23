export default {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'personalBio', title: 'Personal Bio', type: 'text' },
    { name: 'image', title: 'Image', type: 'accessableImage' },
  ],
}
