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
        There are many reasons to vote for a candidate: party affiliation, position on taxes, jobs and national security.  Here, you can get a NON-PARTISAN review of the candidate’s views on energy, environment and climate when making your decision.
      </p>
      <p>
        VGI volunteers put together non-partisan resources to help inform voters. Where available, it includes a summary of the candidate’s policy positions, voting record, ratings and a listing of campaign contributions from the fossil fuel industry based on publicly available information.
      </p>
      <p>
        In addition, candidates in select races were invited to share their views through a questionnaire. Their responses (if any) are provided. Candidates were contacted multiple times; lack of a response to our inquiries is noted. Failure to provide voters with their positions indicates their opposition or low priority.
      </p>
      <p>
        Due to limited volunteer time and resources, only major party candidates in select contested races were evaluated.
      </p>
      <h4 className="underline">Election Information for 2022 Indiana General Election</h4>
      <ul>
        <li>
          Early voting begins October 12th.  Find location & hours <a href="https://indianavoters.in.gov/" target="_blank" rel="noopener noreferrer">here</a> or at your local County Election Office.
        </li>
        <li>
          GENERAL ELECTION DAY is on Tuesday, November 8.
          Polls are open 6 am - 6 pm, prevailing local time.
        </li>
        <li>
          To see your ballot, your voting location, and voting status, go to <a href="https://ballotpedia.org/Sample_Ballot_Lookup" target="_blank" rel="noopener noreferrer">Ballotpedia</a>.
        </li>
        <li>
          The state website doesn’t have the new districts as of 9/22/22.
        </li>
      </ul>
      <p>
        <span style={{fontSize:'1.5em'}}className="uppercase bold">FIND YOUR LEGISLATORS HERE - </span>
        <a href="http://iga.in.gov/legislative/find-legislators/" target="_blank" rel="noopener noreferrer">http://iga.in.gov/legislative/find-legislators/</a>
      </p>
      <p>
        <span style={{fontSize:'1.5em'}}className="uppercase bold">FIND CANDIDATE VIEWS HERE - </span>
        <DocList search="Candidate Views" />
      </p>
      </div>
      <div className="item">
        <ul>
          <DocList search="Candidate Views" />
          <DocList search="Campaign" />
        </ul>
      </div>
    </div>
  </Layout>
 )
}

export default CandidatePage
