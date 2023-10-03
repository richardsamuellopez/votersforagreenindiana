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
    <h1 className="uppercase">{data.year} General Candidate Views</h1>
    <p>The Green Voters Guide represents a non-partisan evaluation of policies, positions, statements and votes to identify the "greener" candidate(s) within select races. The environmentally-friendly candidate(s) who in our opinion are most likely to address climate issues get a green checkmark. Due to limited resources, only major party candidates in select races are evaluated.</p>
    <CandidateList data={data} />
  </Layout>
 )
}

export default CandidateViewsGeneral2023
