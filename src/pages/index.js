import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`
const BlogContainer = styled.div`
  margin: 40px auto;
  max-width: 900px;
`
const HeaderTitle = styled.h1`
  margin-top: 40px;
  text-align: center;
`
const Banner = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 300px;
  }
`
const BlogPosts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`
const BlogPost = styled.div`
  width: 400px;
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
const IndexPage = props => {
  const siteTitle = "Zero Duty Articles"
  const { data } = props
  const posts = data.allMdx.edges
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <BannerContainer>
        <Banner>
          <img src="./assets/zerodutybanner.png" alt="Zero Duty Banner" />
        </Banner>
        <div>
          <p>
            A digital studio that produces enjoyable,
            <br />
            informative and inspiring content for a global audience.
          </p>
        </div>
      </BannerContainer>
      <HeaderTitle>Recent Articles</HeaderTitle>
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
