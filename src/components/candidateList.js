import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const CandidateList = ({query}) => {

    const data = useStaticQuery(graphql`
    {
        allCandidatesCsv {
            nodes {
                Race
                Republican
                Rinfo
                Democrat
                Dinfo
                Incumbent
                Preferred
                Link
            }
        }
    }
    `);

    return (<div className="candidate-list">

        {/* {data.allCandidatesCsv.nodes.filter(c => c.Race === 'U.S. SENATE').map((race, index) => { */}
        {data.allCandidatesCsv.nodes.map((race, index) => {
            return (
                <a href={race.Link} style={{display: 'block'}} target="_blank" rel="noopener noreferrer">
                    <div className="candidate-row">
                        <a name={race.Race.replace(/ /g, '')}></a>
                        <div className="candidate-item">{race.Race.replace('STATE', '')}</div>
                        <div className="candidate-item">{race.Republican}</div>
                        <div className="candidate-item">{race.Democrat}</div>
                    </div>
                </a>
            )
        })}
        </div>
    )
}

export default CandidateList
