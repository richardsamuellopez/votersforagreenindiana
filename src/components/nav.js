import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./nav.css"

const Nav = ({menuLinks}) => (
    <nav>
        <ul>
            {menuLinks.map(link => (
            <li
                key={link.name}
                style={{
                listStyleType: `none`,
                }}
            >
                <Link to={link.link}>
                {link.name}
                </Link>
            </li>
            ))}
        </ul>
    </nav>
)

Nav.propTypes = {
    menuLinks: PropTypes.array,
}

Nav.defaultProps = {
    menuLinks: []
}

export default Nav
