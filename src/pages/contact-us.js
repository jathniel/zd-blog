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
const ContactUsPage = props => {
  const siteTitle = "Zero Duty Articles | Contact Us"
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`digital`, `articles`, `facebook`, `youtube`]}
      />

      <AboutContainer>
        <div>
          <p>
            For any concerns and suggestions please email
            jathnielargueza@gmail.com
          </p>
        </div>
      </AboutContainer>
    </Layout>
  )
}
export default ContactUsPage
