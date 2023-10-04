import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import '../candidate-views.css'
import DocList from "../../components/docList";
import CandidateList from "../../components/candidateList3";
import data from "../../data/candidates.json"

const CandidateViewsGeneral2023 = () => {
 return (
  <Layout>
    <SEO title="Candidate Views Questionaire & Answers" />
    <h1 className="uppercase">Candidate Views</h1>
    <p>This is a nonpartisan summary of the candidate’s views, policies, positions, statements and votes related to climate, sustainability and resilience. Due to limited resources, only major party candidates in select contested races are evaluated.</p>
    <h1 className="uppercase green">{data.title}</h1>
    <CandidateList data={data} />
  </Layout>
 )
}

export default CandidateViewsGeneral2023
