const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/Blog.js`)

  return new Promise((resolve, _reject) => {
    resolve(graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                path
                title
              }
            }
            next {
              frontmatter {
                path
                title
              }
            }
            prev: previous {
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
    `)
    .then(result => {
      const posts = result.data.allMarkdownRemark.edges

      posts.forEach(({node, next, prev}, index) => {
        const path = node.frontmatter.path
        createPage({
          path,
          component: blogPostTemplate,
          context: {
            pathSlug: path,
            prev,
            next
          }
        })
        resolve()
      })
    }) 
  )}
)}