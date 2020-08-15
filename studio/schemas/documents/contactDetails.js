export default {
  type: 'document',
  title: 'Contact Details',
  name: 'contactDetails',
  fields: [
    // The "of"-property must be set, and it must be an array
    {
      type: 'array', // type is required
      title: 'Contact Items',
      name: 'contactItems',
      of: [{ type: 'contactItem' }],
    },
  ],
}
