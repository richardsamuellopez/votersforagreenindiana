import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import './candidate-views.css'

const CandidatePage = () => {
 return (
  <Layout>
    <SEO title="Candidate Views Questionaire & Answers" />
    <h1 className="uppercase">Candidate Views</h1>
    <div>
      <p>
        There are many reasons to vote for a candidate: party affiliation, position on taxes, jobs and national security.  Whether you’re Republican, Democrat or Independent voting for local, state or federal candidates, we’d like you to consider the candidate’s views on energy, environment and climate when making your decision.
      </p>
      <p>
        Candidates in select races were invited to share their views on energy, environment and climate.  Candidates were contacted multiple times on several occasions; refusing to respond is indicative of having an opposing view.
      </p>
      <p>
        In addition, we also review the candidate’s policy positions, voting record and campaign contributions.
        Due to limited resources, only major party candidates in select races are evaluated.
      </p>
      <h3 className="uppercase">FIND YOUR LEGISLATORS HERE -</h3>
      <p>
        <a href="http://iga.in.gov/legislative/find-legislators/" target="_blank" rel="noopener noreferrer">http://iga.in.gov/legislative/find-legislators/</a>
      </p>
      <h3 className="uppercase">FIND CANDIDATE VIEWS HERE -</h3>
      <p>The candidate view will be available in October.</p>
    </div>
  </Layout>
 )
}

export default CandidatePage
