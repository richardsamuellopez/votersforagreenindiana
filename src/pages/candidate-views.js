import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import './candidate-views.css'

const CandidatePage = () => {
 return (
  <Layout>
    <SEO title="Candidate Views Questionaire & Answers" />
    <h1>Candidate Views Questionaire & Answers</h1>
    <div className="flex-container">
      <div className="item">
        <p>This will be the landing page for the Candidate Views QUestionaire & Answers page.</p>
      </div>
      <div className="item">
        <ul>
        </ul>
      </div>
    </div>
  </Layout>
 )
}

export default CandidatePage
