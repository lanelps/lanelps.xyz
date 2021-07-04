export default {
  name: 'contactDetails',
  title: 'Contact Details',
  type: 'document',
  fields: [
    {
      name: 'contactItems',
      title: 'Contact Items',
      type: 'array',
      description:
        'These will show up mainly in the footer, but also other areas of the site where contact details are used',
      of: [{ type: 'contactItem' }],
    },
  ],
}
