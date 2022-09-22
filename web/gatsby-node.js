/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~assets': path.resolve(__dirname, `src/assets`),
        '~components': path.resolve(__dirname, `src/components`),
        '~context': path.resolve(__dirname, `src/context`),
        '~data': path.resolve(__dirname, `src/data`),
        '~hooks': path.resolve(__dirname, `src/hooks`),
        '~node_modules': path.resolve(__dirname, `node_modules`),
        '~templates': path.resolve(__dirname, `src/templates`),
        '~utils': path.resolve(__dirname, `src/utils`)
      }
    }
  });
};

exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect }
}) => {
  const { data, errors } = await graphql(`
    {
      allSanityProjects {
        edges {
          node {
            id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (errors) {
    throw errors;
  }

  const projects = data.allSanityProjects.edges || [];

  projects.forEach(({ node: { id, slug } }) => {
    const path = `/work/${slug.current}`;

    createPage({
      path,
      component: require.resolve('./src/templates/project.jsx'),
      context: { id }
    });
  });

  createRedirect({
    fromPath: `/admin`,
    toPath: `https://lanelps.sanity.studio/desk`
  });
};
