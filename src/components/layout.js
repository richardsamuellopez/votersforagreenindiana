/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <div className="wrapper">
      <Header menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
        <main className="body"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 66px`,
          paddingTop: 0,
        }}>{children}</main>
        <footer style={{backgroundColor: 'black', color: 'white', textAlign: 'center', padding: '20px'}}>
          © {new Date().getFullYear()}
          {` `}
          {data.site.siteMetadata.title}
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
