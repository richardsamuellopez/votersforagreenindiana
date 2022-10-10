import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Check from './check';

const GVGCandidateList = ({query}) => {
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
                Double
                Potential
                Link
            }
        }
    }
    `);

    return (<div className="candidate-list">
        <h1>GREEN VOTERS GUIDE</h1>
        {data.allCandidatesCsv.nodes.map((race, index) => {
            return (
                <div>
                    { index === 1 &&
                        <h2 className="gvg-race green">U.S. HOUSE OF REPRESENTATIVES</h2>
                    }
                    { race.Race === 'INDIANA STATE SENATE DISTRICT 4' &&
                       <h2 className="gvg-race green">INDIANA STATE SENATE</h2>
                    }
                    { race.Race === 'INDIANA STATE HOUSE DISTRICT 5' &&
                       <h2 className="gvg-race green">INDIANA STATE HOUSE</h2>
                    }

                    { race.Race !== 'U.S. SENATE' ?
                        <h3 className="gvg-race">{race.Race.replace('STATE', '')}
                            <a name={race.Race.replace(/ /g, '')}></a>
                        </h3>
                        :
                        <h2 className="gvg-race green">{race.Race.replace('STATE', '')}
                            <a name={race.Race.replace(/ /g, '')}></a>
                        </h2>
                    }
                    <div className="gvg-race-row">
                        <div className="gvg-candidate-item">
                        <div className="gvg-preferred">
                                    { (race.Double === 'R' || race.Double === 'BOTH')
                                        ? <div style={{display: 'flex'}}><Check /><Check className="second-check" /></div>
                                        : (race.Preferred === 'R' || race.Preferred === 'BOTH')&& <Check />
                                    }
                                    { (race.Potential === 'R' || race.Potential === 'BOTH') && <div className="potential-advocate">Potential Advocate</div> }
                                </div>
                                <div className="gvg-column-2">
                                    <div className="gvg-name">{race.Republican} - R<span className="gvg-incumbent">{race.Incumbent==='R' && "(Incumbent)"}</span></div>
                                    <div className="gvg-info">{race.Rinfo}</div>
                                </div>
                        </div>
                        <div className="gvg-candidate-item">
                                <div className="gvg-preferred">
                                    { (race.Double === 'D' || race.Double === 'BOTH')
                                        ? <div style={{display: 'flex'}}><Check /><Check className="second-check" /></div>
                                        : (race.Preferred === 'D' || race.Preferred === 'BOTH')&& <Check />
                                    }
                                    { (race.Potential === 'D' || race.Potential === 'BOTH') && <div className="potential-advocate">Potential Advocate</div> }
                                </div>
                                <div className="gvg-column-2">
                                    <div className="gvg-name">{race.Democrat} - D<span className="gvg-incumbent">{race.Incumbent==='D' && "(Incumbent)"}</span></div>
                                    <div className="gvg-info">{race.Dinfo}</div>
                                </div>
                        </div>
                        <div className="gvg-candidate-item">
                            <div className="gvg-preferred"></div>
                            <div className="gvg-column-2">
                                <a href={race.Link} target="_blank" rel="noopener noreferrer">Read more about these candidates.</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default GVGCandidateList
