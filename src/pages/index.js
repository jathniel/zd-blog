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
const AboutContainer = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #ddecef;
  h1 {
    font-weight: 700;
    font-size: 65px;
  }
  p {
    font-size: 24px;
    line-height: 2;
  }
`
const AboutFloat = styled.div`
  max-width: 600px;
  margin: -70px auto;
  background: #fff;
  padding: 40px;
  text-align: center;
  margin-bottom: 50px;
  p {
    font-size: 20px;
    line-height: 1.7;
  }
  a {
    background-color: transparent;
    border: solid rgba(0, 0, 0, 1) 1px;
    cursor: pointer !important;
    color: #000;
    margin-top: 40px;
    padding: 15px 80px;
    display: inline-block;
    transition: all 0.5s ease;
    &:hover {
      color: #fff;
      background: #000;
    }
  }
`
const IndexPage = props => {
  const siteTitle = "Zero Duty Articles"
  const { data } = props
  const posts = data.allMdx.edges
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`digital`, `articles`, `facebook`, `youtube`]}
      />
      <BannerContainer>
        <Banner>
          <img src="./assets/zerodutybanner.png" alt="Zero Duty Banner" />
        </Banner>
      </BannerContainer>
      <AboutContainer>
        <div>
          <h1>Zero Duty Articles</h1>
          <p>
            A digital studio that produces enjoyable,
            <br />
            informative and inspiring content for a global audience.
          </p>
        </div>
      </AboutContainer>
      <AboutFloat>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <a href="/a">About Zero Duty</a>
      </AboutFloat>
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
