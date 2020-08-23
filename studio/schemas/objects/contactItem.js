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
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.max(20).warning('You need a shorter title'),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      description:
        'Add in a url (https://example.com), email (mailto:example@gmail.com) or phone number (tel:+64226954688)',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
  ],
}
