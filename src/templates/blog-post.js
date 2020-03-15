import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const BlogContainer = styled.div`
  margin: 20px auto;
  max-width: 800px;
`
const pop = () => {
  var _pop = _pop || []
  _pop.push(["siteId", 3918179])
  _pop.push(["minBid", 0])
  _pop.push(["popundersPerIP", 0])
  _pop.push(["delayBetween", 0])
  _pop.push(["default", false])
  _pop.push(["defaultPerDay", 0])
  _pop.push(["topmostLayer", false])
  ;(function() {
    var pa = document.createElement("script")
    pa.type = "text/javascript"
    pa.async = true
    var s = document.getElementsByTagName("script")[0]
    pa.src = "//c1.popads.net/pop.js"
    pa.onerror = function() {
      var sa = document.createElement("script")
      sa.type = "text/javascript"
      sa.async = true
      sa.src = "//c2.popads.net/pop.js"
      s.parentNode.insertBefore(sa, s)
    }
    s.parentNode.insertBefore(pa, s)
  })()
}
const BlogPostTemplate = props => {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <Layout location={props.location} title={siteTitle}>
      {pop()}
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogContainer>
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`blog${previous.fields.slug}`} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`blog${next.fields.slug}`} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </BlogContainer>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
