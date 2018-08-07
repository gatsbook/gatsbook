const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.onCreateBabelConfig = ({ actions: { setBabelPlugin } }) => {
  setBabelPlugin({ name: 'babel-plugin-tailwind' })
  setBabelPlugin({ name: 'babel-plugin-emotion' })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    const template = slug
      .split(path.sep)
      .filter(item => item !== '')
      .shift()
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `template`,
      value: template,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
                template
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node: { fields: { slug, template } } }) => {
        createPage({
          path: slug,
          component: path.resolve(`./src/templates/${template}.jsx`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug,
          },
        })
      })
      resolve()
    })
  })
}
