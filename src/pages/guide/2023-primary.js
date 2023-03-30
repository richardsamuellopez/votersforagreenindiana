import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GVGCandidateList from "../../components/GVGCandidateList"
import '../candidate-views.css';
import { useStaticQuery, graphql } from "gatsby"

const GVGPrimary2023 = () => {
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
    <h1>2023 Primary</h1>
        <GVGCandidateList data={data.allPrimaryCandidates2023Csv}/>
  </Layout>
 )
}

export default GVGPrimary2023
