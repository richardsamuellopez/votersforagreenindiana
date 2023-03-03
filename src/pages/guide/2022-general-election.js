import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GVGCandidateList from "../../components/GVGCandidateList"
import '../candidate-views.css';
import { useStaticQuery, graphql } from "gatsby"

const GeneralElectionPage = () => {
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
    <h1>2022 General Election</h1>
        <GVGCandidateList data={data.allCandidates2022Csv} />
  </Layout>
 )
}

export default GeneralElectionPage
