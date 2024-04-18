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
    <iframe style={{width: "100%", height: "100vh", border: "none"}} src="https://docs.google.com/document/d/e/2PACX-1vRQY2GI0YARp-QrYzRFgFEky7MDvKCzN1SUBsnQzDEDGhMCfxujznEE-Z6gRX4Vkg/pub?embedded=true"></iframe>
  </Layout>
 )
}

export default CandidatePage
