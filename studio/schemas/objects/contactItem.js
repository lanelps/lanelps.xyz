export default {
  name: 'contactItem',
  title: 'Contact Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.max(20).warning('You need a shorter title'),
    },
    {
      name: 'name',
      title: 'Link name',
      type: 'string',
      validation: (Rule) => Rule.max(20).warning('You need a shorter title'),
    },
    {
      name: 'link',
      title: 'Link url',
      type: 'url',
      description:
        'Add in a url (https://###), email (mailto:###) or phone number (tel:###)',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
  ],
}
