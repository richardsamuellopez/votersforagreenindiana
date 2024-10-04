import React, {useEffect, useState} from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import '../../pages/candidate-views.css';
import DocList from "../../components/docList";
import CandidateList from "../../components/candidateList4";
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
            <SEO title="Candidate Views Questionaire & Answers" />
                <div className="flex-container">
                    <div className="item">
                    <h1 className="uppercase">2024 General Election Candidate Views</h1>
                        <p>
                        There are many reasons to vote for a candidate: party affiliation, position on taxes, jobs and national security. Here, you’ll get a review of the candidate’s views on clean energy, clean air, clean water, climate and sustainability!  Where available, it includes the candidate’s policy positions, voting record, ratings and a listing of campaign contributions from the fossil fuel industry based on publicly available information.
                        </p>
                        <p>
                            In addition, candidates in select races are invited to share their views through a questionnaire. Their responses (if any) are provided. Candidates are contacted several times; lack of a response to our inquiries is noted. Failure to provide voters with their positions indicates their opposition or low priority.
                        </p>
                        <p>
                        Due to limited volunteer time and resources, only major party candidates in select contested races are evaluated.
                        </p>
                        <h4 classNa me="underline">2024 General Election is on Tuesday November 5th, 6 am – 6 pm</h4>
                        <ul>
                            <li>
                                Early voting begins October 8th.  Find location & hours at your local County Election Office.
                            </li>
                            <li>
                                Register to Vote or Check Voting Status at the <a href="https://indianavoters.in.gov/">Indiana Voter Portal</a>.  Check Voting Status will also show who’s on your ballot and voting locations
                            </li>
                        </ul>
                        <h1>2024 General Election Coming soon</h1>
                        { loading ? <><div style={{align: "center"}} class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></>
                    :
                    <CandidateList data={isDataEmpty ? googleSheetData : data}/>
                }
                    </div>
                </div>
        </Layout>
    )
}

export default General2024

