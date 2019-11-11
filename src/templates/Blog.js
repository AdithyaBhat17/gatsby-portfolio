import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { Nav } from "../components";

export const Blog = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark;

  return (
    <div className="blog-post-container">
      <Helmet title={`Shrinidhi Kulkarni - ${frontmatter.title}`} />
      <Nav />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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