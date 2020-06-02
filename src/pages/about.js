import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
const AboutPage = props => {
  const siteTitle = "Zero Duty Articles | About us"
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`digital`, `articles`, `facebook`, `youtube`]}
      />
      <AboutContainer>
        <div>
          <h1>Zero Duty Articles</h1>
          <p>
            an independent digital content studio that yields to develop
            <br />
            creative, informative and inspiring features for the audience
            <br />
            worldwide.
          </p>
        </div>
      </AboutContainer>
    </Layout>
  )
}
export default AboutPage
