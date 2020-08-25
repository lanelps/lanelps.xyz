export default {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'projectName',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) =>
        Rule.max(30).warning('Shorter titles are usually better'),
    },
    {
      name: 'projectDescription',
      title: 'Project Description',
      type: 'text',
      validation: (Rule) =>
        Rule.max(1000).warning('Maybe keep it brief (1000 characters or less)'),
    },
    {
      name: 'projectDate',
      title: 'Project Date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    },
    {
      name: 'projectImages',
      title: 'Project Images',
      type: 'array',
      options: {
        hotspot: true,
      },
      of: [{ type: 'image' }],
    },
    {
      name: 'projectVideos',
      title: 'Project Videos',
      type: 'array',
      of: [{ type: 'file' }],
    },
  ],
}
