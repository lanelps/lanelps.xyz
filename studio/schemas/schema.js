import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

//documents
import siteSettings from "./documents/siteSettings.js";
import contactDetails from "./documents/contactDetails.js";
import projects from "./documents/projects.js";
import aboutPage from "./documents/aboutPage.js";
import contactPage from "./documents/contactPage.js";
import homePage from "./documents/homePage.js";

//objects
import contactItem from "./objects/contactItem.js";
import accessableImage from "./objects/accessableImage.js";
import author from "./objects/author.js";
import imageContainer from "./objects/imageContainer.js";
import blockContent from "./objects/blockContent.js";
import altImage from "./objects/altImage.js";
import simpleBlock from "./objects/simpleBlock.js";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    //singleton documents
    siteSettings,
    aboutPage,
    contactDetails,
    contactPage,
    homePage,

    //documents
    projects,

    //objects
    contactItem,
    accessableImage,
    author,
    imageContainer,
    blockContent,
    altImage,
    simpleBlock
  ])
});
