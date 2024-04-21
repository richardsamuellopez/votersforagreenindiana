import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DocList from "../components/docList"
import GVGButton from "../components/GVGButton"
import { Link } from "gatsby"
import './guide.css'
import data from "../data/candidatesPrimary.json"
import GVGCandidateListPrimary from "../components/GVGCandidateListPrimary"

const GuidePage = () => {
  console.log(data)
 return (
  <Layout>
    <SEO title="Green voters guide" />
    <h1>Green Voters Guide</h1>
    <div className="flex-container">
      <div className="item">
      <p>
          The Green Voters Guide represents a non-partisan evaluation of voting records,ratings, policy positions, campaign priorities and financial contributions from the fossil fuel industry to identify the "greener" candidate(s) within select races. Due to limited resources, only major party candidates in select contested races are evaluated. Evaluations are conducted by a non-partisan committee of 1 Republican, 1 Democratand 1 Independent who care deeply about addressing climate change. The environmentally-friendly candidates who in our opinion are most likely to addressclimate issues get a green checkmark.
        </p>
        <p>
          <b><u>Election Information</u></b>
          <ul>
            <li>Early voting begins April 9. Find locations & hours at the Election Office for your  county. </li>
            <li>PRIMARY ELECTION DAY is on Tuesday, May 7. Polls are open 6 am – 6 pm, prevailing  local time. </li>
            <li>To see your ballot, your voting location, and voting status, go to <a href="https://indianavoters.in.gov/">https://indianavoters.in.gov/</a>.</li>
            <li>To find your current elected officials, go to <a href="http://iga.in.gov/legislative/find-legislators/">http://iga.in.gov/legislative/find-legislators/</a></li>
            <li>You will need to ask for either a <b>Republican</b> or <b>Democratic</b> ballot. Please note Indiana  has an <u>open primary</u> which means anyone can vote in EITHER primary. However, anyone  wishing to run as a candidate in the future might not want to vote outside of their party.</li>
            </ul>
        </p>
        <p style={{textAlign: 'center'}}>
          <h1>2024 PRIMARY ELECTION</h1>
          <h1>MAY 7, 2024 </h1>
        </p>
        <p style={{textAlign: 'center'}}>
          <h1>Select Your Primary</h1>
          <h1><a href="#Rep">REPUBLICAN PRIMARY</a></h1>
          <h1><a href="#Dem">DEMOCRATIC PRIMARY</a></h1>
        </p>
        <GVGCandidateListPrimary data={data}/>
      </div>
    </div>
  </Layout>
 )
}

export default GuidePage
