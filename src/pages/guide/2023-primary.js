import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GVGCandidateList from "../../components/GVGCandidateList"
import '../candidate-views.css';

const PrimaryPage = () => {
 return (
  <Layout>
    <SEO title="Green voters guide" />
    <h1>GREEN VOTERS GUIDE</h1>
    <h1>2023 Primary</h1>
        {/* <GVGCandidateList /> */}
  </Layout>
 )
}

export default PrimaryPage
