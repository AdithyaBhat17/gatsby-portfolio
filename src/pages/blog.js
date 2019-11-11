import React from "react"
import { Link, graphql } from "gatsby"
import { Nav } from '../components'
import { Helmet } from "react-helmet"

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="blog-posts">
        <Helmet title="Blogs - Shrinidhi Kulkarni" />
        <Nav />
        <h1>My Blogs</h1>
        {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
            return (
                <Link className="blog-link" key={post.id} to={post.frontmatter.path}>                    
                    <div className="blog-post-preview">
                        <h1>{post.frontmatter.title}</h1>
                        <small>{post.frontmatter.date}</small>
                        <p>{post.excerpt}</p> 
                    </div>
                </Link>
            )
        })}
    </div>
  )
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`