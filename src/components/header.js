import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
const HeaderStyle = styled.div`
  background-color: #020731;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.p`
  color: #fff;
  font-size: 24px;
  margin-bottom: 0;
  font-weight: 700;
`
const Menu = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    margin-right: 15px;
  }
`
const Header = () => (
  <HeaderStyle>
    <Link style={{ boxShadow: `none` }} to="/">
      <Logo>Zero Duty Article</Logo>
    </Link>
    <Menu>
      <Link style={{ boxShadow: `none` }} to="/blog/">
        blog
      </Link>
      {/* <Link style={{ boxShadow: `none` }} to="/blog/">
        Anime
      </Link>
      <Link style={{ boxShadow: `none` }} to="/food/">
        Food
      </Link> */}
    </Menu>
  </HeaderStyle>
)
export default Header
