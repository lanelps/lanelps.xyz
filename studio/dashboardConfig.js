export default {
  widgets: [
    {
      name: 'project-info',
      layout: {
        width: 'small',
        height: 'small',
      },
    },
    {
      name: 'document-list',
      options: {
        title: 'Last edited documents',
        order: '_updatedAt desc',
      },
      layout: {
        width: 'large',
        height: 'small',
      },
    },
    {
      name: 'project-users',
      layout: {
        width: 'small',
        height: 'small',
      },
    },
  ],
}
