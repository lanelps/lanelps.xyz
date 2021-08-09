export default {
	name: 'aboutPage',
	title: 'About Page',
	type: 'document',
	fields: [
		{ 
			name: 'title', 
			title: 'Title', 
			type: 'string' 
		},
		{
			name: 'text',
			title: 'Text',
			type: 'text',
		},
		{ 
			name: 'personalBio', 
			title: 'Personal Bio', 
			type: 'blockContent' 
		},
		{
			name: 'image',
			title: 'Image',
			type: 'altImage',
		},
	],
}
