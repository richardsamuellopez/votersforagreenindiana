import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GVGCandidateList from "../../components/GVGCandidateList2"
import '../candidate-views.css';
import { useStaticQuery, graphql } from "gatsby"

const GVGGeneral2023 = () => {
  const data = useStaticQuery(graphql`
    {
      allGeneralCandidates2023Csv {
        nodes {
          Race
          Name1
          Party1
          Preferred1
          Potential1
          Double1
          Incumbent1
          Uncontested1
          Info1
          Name2
          Party2
          Preferred2
          Potential2
          Double2
          Incumbent2
          Uncontested2
          Info2
          Name3
          Party3
          Preferred3
          Potential3
          Double3
          Incumbent3
          Uncontested3
          Info3
          Name4
          Party4
          Preferred4
          Potential4
          Double4
          Incumbent4
          Uncontested4
          Info4
          Name5
          Party5
          Preferred5
          Potential5
          Double5
          Incumbent5
          Uncontested5
          Info5
          RaceInfo
          Link
        }
      }
    }
  `);

 return (
  <Layout>
    <SEO title="Green voters guide" />
    <h1>GREEN VOTERS GUIDE</h1>
    <p>The Green Voters Guide represents a non-partisan evaluation of policies, positions, statements and votes to identify the "greener" candidate(s) within select races. The environmentally-friendly candidate(s) who in our opinion are most likely to address climate issues get a green checkmark. Due to limited resources, only major party candidates in select races are evaluated.</p>
    <GVGCandidateList data={data.allGeneralCandidates2023Csv}/>
  </Layout>
 )
}

export default GVGGeneral2023
