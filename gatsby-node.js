/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// import j from './src/templates/page.js'
const path = require('path')
exports.createPages = async ({ actions: {createPage}, graphql }) => {
  const results = await graphql(`
{
  allCosmicjsPages {
    edges {
      node {
        id
        slug
        metadata {
          header
          content
        }
      }
    }
  }
}

  `)
  const pages = results.data.allCosmicjsPages.edges.map(({node}) => node );
  pages.forEach(page => {
    createPage({
        path: page.slug === 'home' ? '/' : `/${page.slug}`,
        component: path.resolve('src/templates/page.js'),
        context: {
            slug: page.slug
        }
    })
  })
}
