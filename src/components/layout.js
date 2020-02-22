import React from "react"
import styled from "styled-components"
import Header from "./header"

const Layout = props => {
  const { children } = props
  return (
    <Wrapper>
      <Header />
      <main>{children}</main>
      <Footer>© {new Date().getFullYear()}, All Rights Reserved.</Footer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 28px;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
