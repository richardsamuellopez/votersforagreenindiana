import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DocList from "../components/docList"
import GVGButton from "../components/GVGButton"
import { Link } from "gatsby"
import './guide.css'
import data from "../data/candidatesPrimary.json"
import GVGCandidateListPrimary from "../components/GVGCandidateListPrimary"
import General2024 from './guide/2024-general'
const GuidePage = () => {
 return (
  <>
    <General2024 />
  </>
 )
}

export default GuidePage
