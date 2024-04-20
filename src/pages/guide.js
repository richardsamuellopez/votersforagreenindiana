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
    <iframe  style={{width:"100%", height:"100vh", border: 'none', allow:"autoplay"}} src="https://drive.google.com/file/d/14-GvayyjIegptB8LUlNIk91jnyghO5M8/preview"></iframe>
  </Layout>
 )
}

export default GuidePage
