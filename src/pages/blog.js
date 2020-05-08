import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogContainer = styled.div`
  margin: 40px auto;
  max-width: 800px;
`
const BlogPosts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`
const BlogPost = styled.div`
  max-width: 400px;
  padding: 15px;
  border: 1px solid #f2f2f2;
  margin: 15px;
  h3 {
    font-size: 24px;
    font-weight: 100;
  }
  a {
    color: #333;
    &:hover {
      color: #286fb4;
    }
  }
`
const Blog = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="All posts" />
      <BlogContainer>
        <BlogPosts>
          <div>
            {posts.map(({ node }, i) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                i % 2 === 0 && (
                  <BlogPost>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link
                        style={{ boxShadow: `none` }}
                        to={`blog${node.fields.slug}`}
                      >
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </BlogPost>
                )
              )
            })}
          </div>
          <div>
            {posts.map(({ node }, i) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                i % 2 === 1 && (
                  <BlogPost>
                    <h3
                      style={{
                        marginBottom: rhythm(1 / 4),
                      }}
                    >
                      <Link
                        style={{ boxShadow: `none` }}
                        to={`blog${node.fields.slug}`}
                      >
                        {title}
                      </Link>
                    </h3>
                    <small>{node.frontmatter.date}</small>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </BlogPost>
                )
              )
            })}
          </div>
        </BlogPosts>
      </BlogContainer>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
