export default {
	name: 'aboutPage',
	title: 'About Page',
	type: 'document',
	fields: [
		{ name: 'title', title: 'Title', type: 'string' },
		{ name: 'personalBio', title: 'Personal Bio', type: 'blockContent' },
		{
			name: 'imageContainer',
			title: 'Image Container',
			type: 'imageContainer',
		},
	],
}
