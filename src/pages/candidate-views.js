import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import './candidate-views.css'
import DocList from "../components/docList";

const CandidatePage = () => {
 return (
  <Layout>
    <SEO title="Candidate Views Questionaire & Answers" />
    <h1 className="uppercase">Candidate Views</h1>
    <div className="flex-container">
     <div className="item">
      <p>
        There are many reasons to vote for a candidate: party affiliation, position on taxes, jobs and national security.  Whether you’re Republican, Democrat or Independent, we’d like you to consider the candidate’s views on energy, environment and climate when making your decision.
      </p>
      <p>
        VGI volunteers put together non-partisan resources to help inform voters. Where available, it includes a summary of the candidate’s policy positions, voting record, ratings and a listing of campaign contributions from the fossil fuel industry based on publicly available information.
      </p>
      <p>
        In addition, candidates in select races were invited to share their views through a questionnaire. Their responses (if any) are provided. Candidates were contacted multiple times; lack of a response to our inquiries is noted. These candidates have failed to provide voters with their positions on the key issue of our global environment.
      </p>
      <p>
        Due to limited volunteer time and resources, only major party candidates in select contested races were evaluated.
      </p>
      <h4 className="underline">Election Information</h4>
      <ul>
        <li>
          Voter registration ends October 5.
        </li>
        <li>
          Early voting begins October 6.  Find location & hours <a href="https://indianavoters.in.gov/" target="_blank" rel="noopener noreferrer">here</a> or at your local county Election Office.
        </li>
        <li>
          Applications to Vote By Mail are due October 22, 11:59 pm (local time). Apply online <a href="https://indianavoters.in.gov/" target="_blank" rel="noopener noreferrer">here</a>.
        </li>
        <li>
          Mail-in absentee ballots must be received by 12 noon (local time), November 3, so be certain to mail in early. Absentee ballots can also be dropped off at your county Election Office during office hours.  More info here.
        </li>
        <li>
          Election Day is November 3, 6 am – 6 pm.
        </li>
        <li>
          To see who’s on your ballot, go to <a href="https://indianavoters.in.gov/" target="_blank" rel="noopener noreferrer">https://indianavoters.in.gov/</a>.  Then to get into your Voter Portal, click on either “CHECK VOTING STATUS” or “VOTING LOCATION”.
        </li>
      </ul>
      <p>
        <span style={{fontSize:'1.5em'}}className="uppercase bold">FIND YOUR LEGISLATORS HERE - </span>
        <a href="http://iga.in.gov/legislative/find-legislators/" target="_blank" rel="noopener noreferrer">http://iga.in.gov/legislative/find-legislators/</a>
      </p>
      <p>
        <span style={{fontSize:'1.5em'}}className="uppercase bold">FIND CANDIDATE VIEWS HERE - </span>
        {/* <DocList search="Candidate Views" /> */}
      </p>
      </div>
      <div className="item">
        <ul>
          {/* <DocList search="Candidate Views" /> */}
          <DocList search="Campaign" />
        </ul>
      </div>
    </div>
  </Layout>
 )
}

export default CandidatePage
