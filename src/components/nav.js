import { Link } from "gatsby"
import React from "react"
import "./nav.css"

const Nav = () => (
    <div className="nav" >
    <ul>
        <li>
            <Link
                to="/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
            >
                About
            </Link>
        </li>
        <li>
            <Link
                to="/page-2/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
            >
                Green Voter's Guide
            </Link>
        </li>
        <li>
            <Link
                to="/"
                style={{
                    color: `white`,
                    textDecoration: `none`,
                }}
            >
                Contact Us
            </Link>
        </li>
    </ul>
    </div>
)

export default Nav
