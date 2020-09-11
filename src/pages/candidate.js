import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import './candidate.css'

const CandidatePage = () => {
 return (
  <Layout>
    <SEO title="Candidate views & review" />
    <h1>Candidate Views & Review</h1>
    <div className="flex-container">
      <div className="item">
        <p>There are many reasons to vote for a candidate: party affiliation, position on taxes, jobs and national security.  Whether you’re Republican,  Democrat or Independent voting for local, state or federal candidates, we’d like you to consider the candidate’s views on energy, environment and climate when making your decision.  We need elected officials who understand the ongoing energy and climate challenges we face today to successfully lead us through these changes to build sustainable and resilient communities.</p>
        <p>The Green Voters Guide represents our best assessment of policies, positions, statements and votes to identify the "green" candidate(s) within a race. These are candidates who we believe are most likely to address climate issues. The more environmentally-friendly candidate(s) in our opinion get a green checkmark. Due to limited resources, only major party candidates in select races are evaluated.</p>
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
