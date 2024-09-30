import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import '../../pages/candidate-views.css';
import DocList from "../../components/docList";
import CandidateList from "../../components/candidateList";
import { useStaticQuery, graphql } from "gatsby"

const General2024 = () => {
  const data = useStaticQuery(graphql`
  {
    allGeneralCandidates2024Csv {
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
  }`);
  console.log("ORIGINAL DATA");
console.log(data.allCandidates2022Csv);
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
                    <CandidateList data={data.allGeneralCandidates2024Csv} />
                </div>
            </div>
    </Layout>
 )
}

export default General2024

