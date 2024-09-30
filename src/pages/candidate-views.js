import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Link} from "gatsby";
import './candidate-views.css'
import DocList from "../components/docList";
import CandidateList from "../components/candidateList";
import { useStaticQuery, graphql } from "gatsby"
import General2024 from "./candidate-views/2024-general"
const CandidatePage = () => {
 return (
  <>
   <General2024 />
  </>
 )
}

export default CandidatePage
