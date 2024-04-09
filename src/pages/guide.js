import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DocList from "../components/docList"
import GVGButton from "../components/GVGButton"
import { Link } from "gatsby"
import './guide.css'

const GuidePage = () => {
 return (
  <Layout>
    <SEO title="Green voters guide" />
    <h1 className="uppercase">Green Voters Guide</h1>
    <iframe style={{width: "100%", height: "100vh", border: "none"re}} src="https://docs.google.com/document/d/e/2PACX-1vTuQUOa_kaXVUWqXCxj_FcbRQsNSLTAbNnipx3BtmCQt70IX_7C-kExK3HJKb9JTQ/pub?embedded=true"></iframe>
  </Layout>
 )
}

export default GuidePage
