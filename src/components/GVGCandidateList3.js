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

    return (<div className="candidate-list">
        {data.cities.map((city, index) => {
            return (
                <div key={index}>
                    <h2>{city.name}</h2>
                    {city.races.map((race, index) => {
                        return (
                            <div key={index}>
                                <h2 className="gvg-race green">{race.name.replace('STATE', '')}
                                    <a name={race.name.replace(/ /g, '')}></a>
                                </h2>
                                
                                {/* { index === 1 &&
                                    <h2 className="gvg-race green">U.S. HOUSE OF REPRESENTATIVES</h2>
                                } */}
                                { race.name === 'INDIANA STATE SENATE DISTRICT 4' &&
                                <h2 className="gvg-race green">INDIANA STATE SENATE</h2>
                                }
                                { race.name === 'INDIANA STATE HOUSE DISTRICT 5' &&
                                <h2 className="gvg-race green">INDIANA STATE HOUSE</h2>
                                }
                                { race.name === 'BARTHOLOMEW COUNTY COUNCIL DISTRICT 1' &&
                                    <h2 className="gvg-race green">BARTHOLOMEW COUNTY</h2>
                                }
                                { race.name === 'HAMILTON COUNTY COUNCIL DISTRICT 2' &&
                                    <h2 className="gvg-race green">HAMILTON COUNTY</h2>
                                }
                                { race.name === 'PORTER COUNTY COMMISSIONER DISTRICT 2' &&
                                    <h2 className="gvg-race green">PORTER COUNTY COMM</h2>
                                }
                                { race.name === 'TIPPECANOE COUNTY COUNCIL DISTRICT 4' &&
                                    <h2 className="gvg-race green">TIPPECANOE COUNTY</h2>
                                }

                                { (race.name.includes('U.S. HOUSE') || race.name.includes('STATE')) &&
                                    <h3 className="gvg-race">{race.name.replace('STATE', '')}
                                        <a name={race.name.replace(/ /g, '')}></a>
                                    </h3>
                                }
                                { race.name.includes('COUNTY') &&
                                    <h3 className="gvg-race">{getCountyRaceName(race.name)}
                                        <a name={getCountyRaceAnchor(race.name)}></a>
                                    </h3>
                                }
                                <div className="gvg-race-row">
                                    {race.candidates.map((candidate, index) => {
                                        return (
                                            <div className="gvg-candidate-item">
                                            <div className="gvg-preferred">
                                                { candidate.preferred && candidate.double ?
                                                    <div style={{display: 'flex'}}><Check /><Check className="second-check" /></div>
                                                : candidate.preferred && <Check />
                                                }
                                                { candidate.potential && <div className="potential-advocate">Potential Advocate</div>}
                                            </div>
                                            <div className="gvg-column-2">
                                                <div className="gvg-name">{candidate.name} - {candidate.party}<span className="gvg-incumbent">{candidate.incumbent ==='Y' && "(Incumbent)"}{candidate.uncontested === 'Y' && "- uncontested"}</span></div>
                                                <div className="gvg-info">{candidate.info}&nbsp;</div>
                                            </div>
                                        </div>
                                        )
                                    })}
                                    {race.link &&
                                        <div className="gvg-candidate-item">
                                            <div className="gvg-preferred"></div>
                                            <div className="gvg-column-2">
                                                <a href={race.link} target="_blank" rel="noopener noreferrer">Read more about these candidates.</a>
                                            </div>
                                        </div>
                                    }
                                    {race.info &&<div>{race.info}</div>}
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        })}
        </div>
    )
}

export default GVGCandidateList
