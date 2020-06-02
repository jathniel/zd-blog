import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const HeaderStyle = styled.div`
  background-color: #fff;
`
const Logo = styled.p`
  color: #333;
  font-size: 24px;
  margin-bottom: 0;
  font-weight: 200;
`
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    color: #333;
    text-decoration: none;
    margin-right: 50px;
    font-weight: 100;
    font-style: "Work Sans";
    transition: all 0.5s ease;
    &:hover {
      color: #286fb4;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 10px 0;
    a {
      margin-right: 0;
    }
  }
`
const HeaderLayout = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 15px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: auto;
  }
`
const Header = () => (
  <HeaderStyle>
    <HeaderLayout>
      <Link style={{ boxShadow: `none` }} to="/">
        <Logo>Zero Duty Article</Logo>
      </Link>
      <Menu>
        <Link style={{ boxShadow: `none` }} to="/about/">
          About
        </Link>
        <Link style={{ boxShadow: `none` }} to="/blog/">
          Blog
        </Link>
        <Link style={{ boxShadow: `none` }} to="/contact-us/">
          Contact Us
        </Link>

        {/* <Link style={{ boxShadow: `none` }} to="/blog/">
        Anime
      </Link>
      <Link style={{ boxShadow: `none` }} to="/food/">
        Food
      </Link> */}
      </Menu>
    </HeaderLayout>
  </HeaderStyle>
)
export default Header
