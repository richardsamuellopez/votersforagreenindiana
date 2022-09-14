import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GVGCandidateList from "../../components/GVGCandidateList"
import '../candidate-views.css';

const GeneralElectionPage = () => {
 return (
  <Layout>
    <SEO title="Green voters guide" />
    <h1>2022 General Election</h1>
        <GVGCandidateList />
  </Layout>
 )
}

export default GeneralElectionPage
