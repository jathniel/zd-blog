import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
const BannerContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const IndexPage = props => {
  const siteTitle = "Zero Duty Articles"
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
    </Layout>
  )
}

export default IndexPage
