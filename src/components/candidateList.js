import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const CandidateList = ({query}) => {

    const data = useStaticQuery(graphql`
    {
        allCandidatesCsv {
            nodes {
                Race
                Republican
                Democrat
            }
        }
    }
    `);

    return (<div className="candidate-list">

        {/* {data.allCandidatesCsv.nodes.filter(c => c.Race === 'U.S. SENATE').map((race, index) => { */}
        {data.allCandidatesCsv.nodes.map((race, index) => {
            return (
                <div className="candidate-row">
                    <a name={race.Race.replace(/ /g, '')}></a>
                    <div className="candidate-item">{race.Race}</div>
                    <div className="candidate-item">{race.Republican}</div>
                    <div className="candidate-item">{race.Democrat}</div>
                </div>
            )
        })}
        </div>
    )
}

export default CandidateList
