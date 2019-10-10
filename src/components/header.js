import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import Nav from "./nav"
import './nav.css'

const Header = ({ siteTitle, menuLinks }) => (
  <header
    style={{
      background: `#A4CC8D`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Logo />
      <Nav menuLinks={menuLinks}/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  menuLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  menuLinks: [],
}

export default Header
