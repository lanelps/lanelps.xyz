export default {
	widgets: [
		{
			name: 'document-list',
			options: {
				title: 'Last edited documents',
				order: '_updatedAt desc',
			},
			layout: {
				width: 'small',
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
		{
			name: 'netlify',
			options: {
				title: 'Netlify deploys',
				sites: [
					{
						title: 'Master: lanelps.xyz',
						apiId: '5f91ed90-9c21-4002-835a-48a87fee7954',
						buildHookId: '5f9d013a42d192ebd7e3703f',
						name: 'lanelps',
					},
				],
			},
			layout: {
				width: 'small',
				height: 'small',
			},
		},
	],
}
