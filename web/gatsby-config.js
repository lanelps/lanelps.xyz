require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Lane Le Prevost-Smith`,
    titleTemplate: `%s - Lane Le Prevost-Smith`,
    description: `Personal Website`,
    author: `Lane Wirihana Le Prevost-Smith`,
    siteUrl: 'http://example.com',
    keywords: ``,
    image: `/share.jpg`,
    fbAppId: ``,
    twitterUsername: ``
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true
      }
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `${__dirname}/static/favicon.png`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GTM_ID
      }
    },
    `gatsby-plugin-gatsby-cloud`
  ]
};
