import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import '../candidate-views.css'
import DocList from "../../components/docList";
import CandidateList from "../../components/candidateList";
import { useStaticQuery, graphql } from "gatsby"

const CandidateViewsPrimary2023 = () => {
  const data = useStaticQuery(graphql`
  {
    allPrimaryCandidates2023Csv {
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
    <h1 className="uppercase">2023 Primary Candidate Views</h1>
    <CandidateList data={data.allPrimaryCandidates2023Csv} />
  </Layout>
 )
}

export default CandidateViewsPrimary2023
