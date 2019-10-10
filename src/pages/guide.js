import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"


import './guide.css'

const GuidePage = () => {
  const data = useStaticQuery(graphql`
   {
     allFile(
       filter: { extension: { eq: "pdf" } }
       sort: {
        fields: [birthTime]
        order: DESC
      }
      ) {
       edges {
         node {
           birthTime
           publicURL
           name
         }
       }
     }
   }
 `)

 return (
  <Layout>
    <SEO title="Green voters guide" />
    <h1>Green voters guide</h1>
    <div className="flex-container">
      <div className="item">
        <p>There are many reasons to vote for a candidate: party affiliation, position on taxes, jobs and national security.  Whether you’re Republican,  Democrat or Independent voting for local, state or federal candidates, we’d like you to consider the candidate’s views on energy, environment and climate when making your decision.  We need elected officials who understand the ongoing energy and climate challenges we face today to successfully lead us through these changes to build sustainable and resilient communities.</p>
        <p>The Green Voter’s Guide is our best effort to identify those candidates who accept climate science, understand this is an important local & global issue, and support policies and actions to reduce carbon pollution.  It represents our best opinion and assessment based on input from the candidates.   Policies, positions, statements and votes are evaluated to identify the "greener" candidate option(s) within a race.  If there is a significant difference between candidates, we identify the more environmentally-friendly candidate with a green checkmark.  If all scores are high, then all receive the green checkmark.  If all scores are low, then no one receives the green checkmark.  Due to limited resources, only major party candidates in select races are evaluated.</p>
      </div>
      <div className="item">
        <ul>
          {data.allFile.edges.map((file, index) => {
            return (
              <li key={`pdf-${index}`}>
                <a href={file.node.publicURL} download>
                  {file.node.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  </Layout>
 )
}

export default GuidePage
