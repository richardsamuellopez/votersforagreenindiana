import React from "react"
import Check from './check';

const GVGCandidateList = ({data}) => {
    const getCountyRaceName = (race) => {
        let myArray = race.split(' ');
        myArray.shift();
        return myArray.join(' ');
        
    };

    const getCountyRaceAnchor = (race) => {
        let myArray = race.split(' ');
        myArray = myArray.map(item => camelize(item));
        myArray[1]='Co';
        myArray[3]='Dist';
        return myArray.join('');
    };

    const camelize = s => s && s[0].toUpperCase() + s.slice(1).toLowerCase();
    if(data.nodes.length <= 1 ) return <></>
    return (<div className="candidate-list">
        {data.nodes.map((race, index) => {
            return (
                <div key={index}>
                    { index === 0 &&
                        <h2 className="gvg-race green">{race.Race.replace('STATE', '')}
                            <a name={race.Race.replace(/ /g, '')}></a>
                        </h2>
                    }
                    { index === 1 &&
                        <h2 className="gvg-race green">U.S. HOUSE OF REPRESENTATIVES</h2>
                    }
                    { race.Race === 'INDIANA STATE SENATE DISTRICT 4' &&
                       <h2 className="gvg-race green">INDIANA STATE SENATE</h2>
                    }
                    { race.Race === 'INDIANA STATE HOUSE DISTRICT 5' &&
                       <h2 className="gvg-race green">INDIANA STATE HOUSE</h2>
                    }
                    { race.Race === 'BARTHOLOMEW COUNTY COUNCIL DISTRICT 1' &&
                        <h2 className="gvg-race green">BARTHOLOMEW COUNTY</h2>
                    }
                    { race.Race === 'HAMILTON COUNTY COUNCIL DISTRICT 2' &&
                        <h2 className="gvg-race green">HAMILTON COUNTY</h2>
                    }
                    { race.Race === 'PORTER COUNTY COMMISSIONER DISTRICT 2' &&
                        <h2 className="gvg-race green">PORTER COUNTY COMM</h2>
                    }
                    { race.Race === 'TIPPECANOE COUNTY COUNCIL DISTRICT 4' &&
                        <h2 className="gvg-race green">TIPPECANOE COUNTY</h2>
                    }

                    { (race.Race.includes('U.S. HOUSE') || race.Race.includes('STATE')) &&
                        <h3 className="gvg-race">{race.Race.replace('STATE', '')}
                            <a name={race.Race.replace(/ /g, '')}></a>
                        </h3>
                    }
                    { race.Race.includes('COUNTY') &&
                        <h3 className="gvg-race">{getCountyRaceName(race.Race)}
                            <a name={getCountyRaceAnchor(race.Race)}></a>
                        </h3>
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
                                    <div className="gvg-name">{race.CandidateA} - {race.PartyA}<span className="gvg-incumbent">{race.Incumbent==='R' && "(Incumbent)"}</span></div>
                                    <div className="gvg-info">{race.InfoA}</div>
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
                                    <div className="gvg-name">{race.CandidateB} - {race.PartyB}<span className="gvg-incumbent">{race.Incumbent==='D' && "(Incumbent)"}</span></div>
                                    <div className="gvg-info">{race.InfoB}</div>
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
