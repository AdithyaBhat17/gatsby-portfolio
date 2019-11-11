import React from "react";
import { graphql, Link } from "gatsby";
import Helmet from "react-helmet";
import { Nav } from "../components";

export const Blog = ({ data: { markdownRemark }, pageContext }) => {
  const { frontmatter, html } = markdownRemark;

  console.log(pageContext)

  return (
    <div className="blog-post-container">
      <Helmet title={`Shrinidhi Kulkarni - ${frontmatter.title}`} />
      <Nav />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        /> <br/>
        <div className="blog-links">
          {
            pageContext.prev !== null ? 
            <div className="blog-link">
              Prev <br/>
              <Link to={pageContext.prev.frontmatter.path}>{pageContext.prev.frontmatter.title}</Link>
            </div> :
            <span>
            </span>
          }
          {
            pageContext.next !== null ? 
            <div style={{textAlign: 'right'}} className="blog-link">
              Next <br/>
              <Link to={pageContext.next.frontmatter.path}>{pageContext.next.frontmatter.title}</Link>
            </div> :
            <span>
            </span>
          }
        </div>
      </div>      
    </div>
  );
};

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`

export default Blog;