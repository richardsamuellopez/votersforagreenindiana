import React, {useEffect, useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DocList from "../components/docList"
import GVGButton from "../components/GVGButton"
import GVGCandidateList from "../components/GVGCandidateList3"
import { Link } from "gatsby"
import './guide.css'

const GuidePage = () => {
  const [googleSheetData, setGoogleSheetData] = useState({});
  useEffect(() => {
    fetch(`https://script.google.com/macros/s/AKfycbxanDC3M7cebGht3CBV6DfNgNnfLIut4gtrUd1VUjIJ7XQjaCRUpc0a2uIw2OUEK7uYOg/exec`, {
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json.data);
      setGoogleSheetData(json.data);

      if(json.data && json.data.settings && json.error === false){
      }
    })
  },[]);

 return (
  <Layout>
    <SEO title="Green voters guide" />
    <h1>Green Voters Guide</h1>
    <div className="flex-container">
      <div className="item">
        <p>
          This election comes at a pivotal time in history when climate science warns of critical thresholds beyond which damage is irreversible.  Like pandemic preparedness, elected officials who understand the ongoing energy and climate challenges are best qualified to lead us through these changes.
        </p>
        <p>
          The Green Voters Guide represents a non-partisan evaluation of policies, positions, statements and votes to identify the "greener" candidate(s) within select races.  The environmentally-friendly candidate(s) who in our opinion are most likely to address climate issues get a green checkmark. Due to limited resources, only major party candidates in select races are evaluated.
        </p>
        <GVGCandidateList data={googleSheetData}/>
      </div>
    </div>
  </Layout>
 )
}

export default GuidePage
