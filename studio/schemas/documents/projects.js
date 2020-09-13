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
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
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
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'projectVideos',
      title: 'Project Videos',
      type: 'array',
      of: [{ type: 'file' }],
    },
  ],
  preview: {
    select: {
      title: 'projectName',
      media: 'projectImages',
    },
  },
}
