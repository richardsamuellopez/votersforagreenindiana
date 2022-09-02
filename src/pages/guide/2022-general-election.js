import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import DocList from "../../components/docList"
// import { Link } from "gatsby"
// import './guide.css'

const GeneralElectionPage = () => {
 return (
  <Layout>
    <SEO title="Green voters guide" />
    <h1>2022 General Election</h1>
    <div className="flex-container">
      <div className="item">
        <p>
          This is the 2022 General Election Guide
        </p>
      </div>
    </div>
  </Layout>
 )
}

export default GeneralElectionPage
