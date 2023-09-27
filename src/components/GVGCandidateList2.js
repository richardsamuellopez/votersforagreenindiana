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
        {data.nodes.map((race, index) => {
            return (
                <div key={index}>

                    <h2 className="gvg-race green">{race.Race.replace('STATE', '')}
                        <a name={race.Race.replace(/ /g, '')}></a>
                    </h2>
                    
                    {/* { index === 1 &&
                        <h2 className="gvg-race green">U.S. HOUSE OF REPRESENTATIVES</h2>
                    } */}
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
                        {race.Name1 != '' &&
                            <div className="gvg-candidate-item">
                                <div className="gvg-preferred">
                                    { race.Preferred1 && race.Double1 ?
                                        <div style={{display: 'flex'}}><Check /><Check className="second-check" /></div>
                                    : race.Preferred1 && <Check />
                                    }
                                    { race.Potential1 && <div className="potential-advocate">Potential Advocate</div>}
                                </div>
                                <div className="gvg-column-2">
                                    <div className="gvg-name">{race.Name1} - {race.Party1}<span className="gvg-incumbent">{race.Incumbent1 ==='Y' && "(Incumbent)"}{race.Uncontested1 === 'Y' && "- uncontested"}</span></div>
                                    <div className="gvg-info">{race.Info1}&nbsp;</div>
                                </div>
                            </div>
                        }
                        {race.Name2 != '' &&
                            <div className="gvg-candidate-item">
                                <div className="gvg-preferred">
                                    { race.Preferred2 && race.Double2 ?
                                        <div style={{display: 'flex'}}><Check /><Check className="second-check" /></div>
                                    : race.Preferred2 && <Check />
                                    }
                                    { race.Potential2 && <div className="potential-advocate">Potential Advocate</div>}
                                </div>
                                <div className="gvg-column-2">
                                    <div className="gvg-name">{race.Name2} - {race.Party2}<span className="gvg-incumbent">{race.Incumbent2 ==='Y' && "(Incumbent)"}{race.Uncontested2 === 'Y' && "- uncontested"}</span></div>
                                    <div className="gvg-info">{race.Info2}&nbsp;</div>
                                </div>
                            </div>
                        }
                        {race.Name3 != '' &&
                            <div className="gvg-candidate-item">
                                <div className="gvg-preferred">
                                    { race.Preferred3 && race.Double1 ?
                                        <div style={{display: 'flex'}}><Check /><Check className="second-check" /></div>
                                    : race.Preferred3 && <Check />
                                    }
                                    { race.Potential3 && <div className="potential-advocate">Potential Advocate</div>}
                                </div>
                                <div className="gvg-column-2">
                                    <div className="gvg-name">{race.Name3} - {race.Party3}<span className="gvg-incumbent">{race.Incumbent3 ==='Y' && "(Incumbent)"}{race.Uncontested3 === 'Y' && "- uncontested"}</span></div>
                                    <div className="gvg-info">{race.Info3}&nbsp;</div>
                                </div>
                            </div>
                        }
                        {race.Name4 != '' &&
                            <div className="gvg-candidate-item">
                                <div className="gvg-preferred">
                                    { race.Preferred4 && race.Double1 ?
                                        <div style={{display: 'flex'}}><Check /><Check className="second-check" /></div>
                                    : race.Preferred4 && <Check />
                                    }
                                    { race.Potential4 && <div className="potential-advocate">Potential Advocate</div>}
                                </div>
                                <div className="gvg-column-2">
                                    <div className="gvg-name">{race.Name4} - {race.Party4}<span className="gvg-incumbent">{race.Incumbent4 ==='Y' && "(Incumbent)"}{race.Uncontested4 === 'Y' && "- uncontested"}</span></div>
                                    <div className="gvg-info">{race.Info4}&nbsp;</div>
                                </div>
                            </div>
                        }
                        {race.Name5 != '' &&
                            <div className="gvg-candidate-item">
                                <div className="gvg-preferred">
                                    { race.Preferred5 && race.Double1 ?
                                        <div style={{display: 'flex'}}><Check /><Check className="second-check" /></div>
                                    : race.Preferred5 && <Check />
                                    }
                                    { race.Potential5 && <div className="potential-advocate">Potential Advocate</div>}
                                </div>
                                <div className="gvg-column-2">
                                    <div className="gvg-name">{race.Name5} - {race.Party5}<span className="gvg-incumbent">{race.Incumbent5 ==='Y' && "(Incumbent)"}{race.Uncontested5 === 'Y' && "- uncontested"}</span></div>
                                    <div className="gvg-info">{race.Info5}&nbsp;</div>
                                </div>
                            </div>
                        }
                        {race.Link &&
                            <div className="gvg-candidate-item">
                                <div className="gvg-preferred"></div>
                                <div className="gvg-column-2">
                                    <a href={race.Link} target="_blank" rel="noopener noreferrer">Read more about these candidates.</a>
                                </div>
                            </div>
                         }
                        {race.RaceInfo &&<div>{race.RaceInfo}</div>}
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default GVGCandidateList
