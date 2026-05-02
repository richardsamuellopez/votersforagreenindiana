import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GVGCandidateList from "../../components/GVGCandidateList3"
import '../candidate-views.css';
import data from "../../data/candidates.json"

const GVGGeneral2023 = () => {

 return (
  <Layout>
    <SEO title="Green voters guide" />
    <h1>GREEN VOTERS GUIDE</h1>
    <p>The Green Voters Guide represents a non-partisan evaluation of policies, positions, statements and votes to identify the "greener" candidate(s) within select races. The environmentally-friendly candidates who in our opinion are most likely to address climate issues get a green checkmark. Due to limited resources, only major party candidates in select contested races are evaluated.</p>
    <h1 className="uppercase green">{data.title}</h1>
    <GVGCandidateList data={data}/>
  </Layout>
 )
}

export default GVGGeneral2023
