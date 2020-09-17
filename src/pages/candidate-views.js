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
        <h4 className="underline">Election Information</h4>

        <p><span className="bold italic">Voter Registration</span> in Indiana ends on October 5, 2020.</p>

        <p><span className="bold italic">Early Voting</span> dates and polling places are available from your county Election Office.</p>

        <p>For <span className="bold italic">Indiana Absentee Ballot</span> instructions, go to:  <a href="http://www.in.gov/sos/elections/2402.htm">www.in.gov/sos/elections/2402.htm</a>.  Your county Elections Office sets the deadline for <span className="bold italic">Absentee Ballot Applications</span> (in October). Mail-in absentee ballots must be <span className="italic">received</span> by 12 noon, Tuesday November 3, so be certain to mail them in early.</p>
      <p>
        <span style={{fontSize:'1.5em'}}className="uppercase bold">FIND YOUR LEGISLATORS HERE - </span>
        <a href="http://iga.in.gov/legislative/find-legislators/" target="_blank" rel="noopener noreferrer">http://iga.in.gov/legislative/find-legislators/</a>
      </p>
      <p>
        <span style={{fontSize:'1.5em'}}className="uppercase bold">FIND CANDIDATE VIEWS HERE - </span>
        The candidate views will be available in October.
      </p>
    </div>
  </Layout>
 )
}

export default CandidatePage
