// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//documents
import siteSettings from './documents/siteSettings.js'
import contactDetails from './documents/contactDetails.js'
import projects from './documents/projects.js'
import aboutPage from './documents/aboutPage.js'
import ContactPage from './documents/contactPage.js'

//objects
import contactItem from './objects/contactItem.js'
import accessableImage from './objects/accessableImage.js'
import author from './objects/author.js'
import imageContainer from './objects/imageContainer.js'
import portableText from './objects/portableText.js'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    //documents
    //singleton documents
    siteSettings,
    aboutPage,
    contactDetails,
    ContactPage,
    //documents
    projects,
    //objects
    contactItem,
    accessableImage,
    author,
    imageContainer,
    portableText,
  ]),
})
