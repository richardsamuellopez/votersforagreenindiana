import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DocList from "../components/docList"
// import { Link } from "gatsby"
import './guide.css'

const GuidePage = () => {
 return (
  <Layout>
    <SEO title="Green voters guide" />
    <h1>Green Voters Guide</h1>
    <div className="flex-container">
      <div className="item">
        <p>
          The 2020 election comes at a pivotal time in history when climate science warns of critical thresholds beyond which damage is irreversible.  Like pandemic preparedness, elected officials who understand the ongoing energy and climate challenges are best qualified to lead us through these changes.
        </p>
        <p>
          The Green Voters Guide represents a non-partisan evaluation of policies, positions, statements and votes to identify the "greener" candidate(s) within select races.  The environmentally-friendly candidate(s) who in our opinion are most likely to address climate issues get a green checkmark. Due to limited resources, only major party candidates in select races are evaluated.
        </p>
      </div>
      <div className="item">
        <ul>
          {/* <DocList search="2020" exclude="Press" /> */}
          {/* <DocList search="Campaign" /> */}
          <DocList search="Green Voters Guide" />
          <DocList search="Solar" />
          {/* <DocList search="Press" /> */}
        </ul>
        <h5>Top Recipients of Campaign Funds from Coal & Utility Industries</h5>
        <ul>
          <DocList search="Soliday" />
          <DocList search="Huston" />
          <DocList search="Charbonneau" />
          <DocList search="Koch" />
        </ul>
      </div>
    </div>
  </Layout>
 )
}

export default GuidePage
