import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import '../candidate-views.css'
import DocList from "../../components/docList";
import CandidateList from "../../components/candidateList";
import { useStaticQuery, graphql } from "gatsby"

const GeneralElection2022 = () => {
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
  }`);

 return (
  <Layout>
    <SEO title="Candidate Views Questionaire & Answers" />
    <h1 className="uppercase">2022 General Election Candidate Views</h1>
    <CandidateList data={data.allCandidates2022Csv} />
  </Layout>
 )
}

export default GeneralElection2022
