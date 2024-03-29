// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// documents
import projects from "./documents/projects.js";

// singletons
import aboutPage from "./singletons/aboutPage.js";
import contactPage from "./singletons/contactPage.js";
import homePage from "./singletons/homePage.js";

// objects
import blockContent from "./objects/blockContent.js";
import altImage from "./objects/altImage.js";
import media from "./objects/media.js";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: `default`,
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    aboutPage,
    contactPage,
    homePage,
    //
    projects,
    //
    blockContent,
    altImage,
    media
  ])
});
