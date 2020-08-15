export default {
  name: 'contactItem',
  title: 'Contact Item',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'title',
      type: 'string',
      validation: (Rule) => Rule.max(20).warning('You need a shorter title'),
    },
    {
      name: 'link',
      title: 'link',
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
