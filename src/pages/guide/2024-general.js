import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GVGCandidateList from "../../components/GVGCandidateList"
import '../candidate-views.css';
import { useStaticQuery, graphql } from "gatsby"

const General2024 = () => {
  const data = useStaticQuery(graphql`
    {
      allGeneralCandidates2024Csv {
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
            Double
            Potential
            Link
        }
      }
    }
  `);

 return (
  <Layout>
    <SEO title="Green voters guide" />
    <h1>GREEN VOTERS GUIDE</h1>
    <div className="flex-container">
      <div className="item">
        <p>
          The Green Voters Guide represents a non-partisan evaluation of voting records,ratings, policy positions, campaign priorities and financial contributions from the fossil fuel industry to identify the "greener" candidate(s) within select races. Due to limited resources, only major party candidates in select contested races are evaluated. Evaluations are conducted by a non-partisan committee of 1 Republican, 1 Democratand 1 Independent who care deeply about addressing climate change. The environmentally-friendly candidates who in our opinion are most likely to addressclimate issues get a green checkmark.
        </p>
        <h1>2024 General Coming Soon</h1>
        <p>
          <b><u>Election Information</u></b>
          <ul>
            <li>Early voting begins October 8th. Find locations & hours at the Election Office for your  county. </li>
            <li>GENERAL ELECTION DAY is on Tuesday, November 5th. Polls are open 6 am – 6 pm, prevailing  local time. </li>
            <li>To see your ballot, your voting location, and voting status, go to <a href="https://indianavoters.in.gov/">https://indianavoters.in.gov/</a>.</li>
            <li>To find your current elected officials, go to <a href="http://iga.in.gov/legislative/find-legislators/">http://iga.in.gov/legislative/find-legislators/</a></li>
            <li>You will need to ask for either a <b>Republican</b> or <b>Democratic</b> ballot. Please note Indiana  has an <u>open primary</u> which means anyone can vote in EITHER primary. However, anyone  wishing to run as a candidate in the future might not want to vote outside of their party.</li>
            </ul>
        </p>
    
        <GVGCandidateList data={data.allGeneralCandidates2024Csv} />
        </div>
        </div>
  </Layout>
 )
}

export default General2024
