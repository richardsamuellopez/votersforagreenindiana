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
    <h1 className="uppercase">Candidate Views</h1>
    <iframe  style={{width:"100%", height:"100vh", border: 'none', allow:"autoplay"}} src="https://drive.google.com/file/d/14-GvayyjIegptB8LUlNIk91jnyghO5M8/preview"></iframe>
  </Layout>
 )
}

export default CandidatePage
