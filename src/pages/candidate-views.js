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
        In addition, candidates in select races were invited to share their views through a questionnaire. Their responses (if any) are provided. Candidates were contacted multiple times; lack of a response to our inquiries is noted. Failure to provide voters with their positions indicates their opposition of low priority.
      </p>
      <p>
        Due to limited volunteer time and resources, only major party candidates in select contested races were evaluated.
      </p>
      <h4 className="underline">Election Information for 2022 Indiana Primary</h4>
      <ul>
        <li>
          Early voting begins April 5.  Find location & hours <a href="https://indianavoters.in.gov/" target="_blank" rel="noopener noreferrer">here</a> or at your local county Election Office.
        </li>
        <li>
          PRIMARY ELECTION DAY is on Tuesday, May 3.
          Polls are open 6 am - 6 pm, prevailing local time.
        </li>
        <li>
          To see your ballot, your voting location, and voting status, go to <a href="https://indianavoters.in.gov/" target="_blank" rel="noopener noreferrer">https://indianavoters.in.gov/</a>.
        </li>
        <li>
          To find your new districts, go to <a href="http://iga.in.gov/legislative/find-legislators/" target="_blank" rel="noopener noreferrer">http://iga.in.gov/legislative/find-legislators/</a>
        </li>
        <li>
          You will need to ask for either a Republican or Democratic ballot. Please note Indiana has an open primary which means anyone can vote in EITHER primary. However, anyone wishing to run as a candidate in the future might not want to vote outside of their party.
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
