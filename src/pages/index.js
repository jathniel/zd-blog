import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
const BannerContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const BlogContainer = styled.div`
  margin: 40px auto;
  max-width: 800px;
`
const HeaderTitle = styled.h1`
  border-bottom: 1px solid #888;
`

const IndexPage = props => {
  const siteTitle = "Zero Duty Articles"
  const { data } = props
  const posts = data.allMdx.edges
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <BannerContainer>
        {/* <div>Image Here</div> */}
        <div>
          <h1>Hi Welcome to Zero Duty Articles</h1>
          <p>
            to find out more about the site check our{" "}
            <Link to="/blog">news section</Link>
          </p>
        </div>
      </BannerContainer>

      <BlogContainer>
        <HeaderTitle>Latest Article</HeaderTitle>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
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
            </div>
          )
        })}
      </BlogContainer>
    </Layout>
  )
}
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

export default IndexPage
