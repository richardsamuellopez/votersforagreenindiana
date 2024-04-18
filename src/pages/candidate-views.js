import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link} from "gatsby";
import './candidate-views.css'
import DocList from "../components/docList";
import CandidateList from "../components/candidateList";
import { useStaticQuery, graphql } from "gatsby"

const CandidatePage = () => {
  const data = useStaticQuery(graphql`
    {
        allCandidates2022Csv {
            nodes {
                Race
                PartyA
                PartyB
                CandidateA
                InfoA
                CandidateB
                InfoB
                Incumbent
                Preferred
                Link
            }
        }
    }
    `);
 return (
  <Layout>
    <SEO title="Candidate Views Questionaire & Answers" />
    <div className="flex-container">
      <div className="item">
        <h1 className="uppercase">Candidate Views</h1>
          <p>
            There are many reasons to vote for a candidate: party affiliation, position on taxes, jobs and national security. Here, you’ll get a review of the candidate’s views on clean energy, clean air, clean water, climate and sustainability!  Where available, it includes the candidate’s policy positions, voting record, ratings and a listing of campaign contributions from the fossil fuel industry based on publicly available information.
          </p>
          <p>
            In addition, candidates in select races are invited to share their views through a questionnaire. Their responses (if any) are provided. Candidates are contacted several times; lack of a response to our inquiries is noted. Failure to provide voters with their positions indicates their opposition or low priority.
          </p>
          <p>
            Due to limited volunteer time and resources, only major party candidates in select contested races are evaluated.
          </p>
          <h4 className="underline">2024 Primary Election is on May 7, 6 am – 6 pm</h4>
          <ul>
            <li>
              Early voting begins April 9th.  Find location & hours at your local County Election Office.
            </li>
            <li>
              Register to Vote or Check Voting Status at the <a href="https://indianavoters.in.gov/">Indiana Voter Portal</a>.  Check Voting Status will also show who’s on your ballot and voting locations
            </li>
          </ul>
        </div>
        <div className="item">
          <ul>
            {/* <li><Link to={'/candidate-views/2023GeneralCandidateViews/'}>Candidate Views for the 2023 General Election</Link></li> */}
            {/* <li><Link to={'/candidate-views/PrimaryElection/'}>Candidate Views for the 2023 General Election</Link></li> */}
          </ul>
        </div>
      </div>
  </Layout>
 )
}

export default CandidatePage
