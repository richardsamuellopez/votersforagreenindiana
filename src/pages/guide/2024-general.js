import React, {useEffect, useState} from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GVGCandidateList from "../../components/GVGCandidateList3"
import '../candidate-views.css';
import data from "../../data/generalCandidates2024.json"

const General2024 = () => {
    const isDataEmpty = JSON.stringify(data)==='{}';
    const [googleSheetData, setGoogleSheetData] = useState({});
    const [loading, setLoading] = useState(isDataEmpty);
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
        setLoading(false);
        if(json.data && json.data.settings && json.error === false){
        }
      })
    },[]);
  

 return (
    <Layout>
        <SEO title="Green voters guide" />
        <h1>2024 GENERAL ELECTION GREEN VOTERS GUIDE</h1>
        <div className="flex-container">
        <div className="item">
            <p>
            The Green Voters Guide represents a non-partisan evaluation of voting records,ratings, policy positions, campaign priorities and financial contributions from the fossil fuel industry to identify the "greener" candidate(s) within select races. Due to limited resources, only major party candidates in select contested races are evaluated. Evaluations are conducted by a non-partisan committee of 1 Republican, 1 Democratand 1 Independent who care deeply about addressing climate change. The environmentally-friendly candidates who in our opinion are most likely to addressclimate issues get a green checkmark.
            </p>
            <p>
            <b><u>Election Information</u></b>
            <ul>
                <li>Early voting begins October 8th. Find locations & hours at the Election Office for your  county. </li>
                <li>GENERAL ELECTION DAY is on Tuesday, November 5th. Polls are open 6 am – 6 pm, prevailing  local time. </li>
                <li>To see your ballot, your voting location, and voting status, go to <a href="https://indianavoters.in.gov/">https://indianavoters.in.gov/</a>.</li>
                <li>To find your current elected officials, go to <a href="http://iga.in.gov/legislative/find-legislators/">http://iga.in.gov/legislative/find-legislators/</a></li>
                {/* <li>You will need to ask for either a <b>Republican</b> or <b>Democratic</b> ballot. Please note Indiana  has an <u>open primary</u> which means anyone can vote in EITHER primary. However, anyone  wishing to run as a candidate in the future might not want to vote outside of their party.</li> */}
                </ul>
            </p>
            { loading ? <><div style={{align: "center"}} class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></>
                :
                <GVGCandidateList data={isDataEmpty ? googleSheetData : data}/>
            }
            </div>
        </div>
    </Layout>
 )
}

export default General2024
