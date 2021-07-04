export default {
  name: 'imageContainer',
  title: 'Image Container',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.max(20).warning('You need a shorter title'),
    },
    { name: 'accessableImage', title: 'Image', type: 'accessableImage' },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'date',
      options: {
        dateFormat: 'YYYY',
        calendarTodayLabel: 'Today',
      },
    },
  ],
}
