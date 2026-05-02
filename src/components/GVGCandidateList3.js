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
    if (!data?.cities)
    return <></>;
    return (<div className="candidate-list">
        {data.cities.map((city, index) => {
            return (
                <div key={index}>
                    <h1 className="uppercase green">{city.name}</h1>
                    {city.races.map((race, index) => {
                        return (
                            <div key={index}>
                                <h3 className="gvg-race uppercase bold">{race.name.replace('STATE', '')}
                                    <a name={race.name.replace(/ /g, '')}></a>
                                </h3>
                                <div className="gvg-race-row">
                                    {race.info &&
                                        <div className="gvg-candidate-item">
                                            <div className="gvg-preferred"></div>
                                            <div className="gvg-column-2">
                                                {race.info}
                                            </div>
                                        </div>
                                    }

                                    {race.candidates.map((candidate, index) => {
                                        return (
                                            <div className="gvg-candidate-item">
                                            <div className="gvg-preferred">
                                                { candidate.preferred === 'dislike' || candidate.preferred === 'n' ? 
                                                <div className="bad-candidate" style={{display: 'flex', color: 'red', padding: '5px 25px', fontSize: '32px', }}>X </div>
                                                : 
                                                candidate.preferred && candidate.double ?
                                                    <div style={{display: 'flex'}}><Check /><Check className="second-check" /></div>
                                                : candidate.preferred && <Check />
                                                }
                                                { candidate.potential && <div className="potential-advocate">Potential Advocate</div>}
                                            </div>
                                            <div className="gvg-column-2">
                                                <div className="gvg-name">
                                                    { candidate.link ?
                                                        <a href={candidate.link}>{candidate.name}</a>
                                                    :
                                                        candidate.name
                                                    }, {candidate.party.toUpperCase()}<span className="gvg-incumbent">{candidate.incumbent && "(Incumbent)"}{candidate.uncontested && " - uncontested"}</span></div>
                                                <div className="gvg-info">{candidate.info}&nbsp;</div>
                                            </div>
                                        </div>
                                        )
                                    })}
                                        <div className="gvg-candidate-item">
                                            <div className="gvg-preferred"></div>
                                            <div className="gvg-column-2">
                                                {race.link &&
                                                    <a href={race.link} target="_blank" rel="noopener noreferrer">Read more about these candidates.</a>
                                                    // : <>
                                                    // <div className="bold">Candidates did not respond to the questionnaire.</div>
                                                    // <div className="green bold">We regret that neither candidate is a strong advocate for climate solutions.</div>
                                                    // </>
                                                }
                                            </div>
                                        </div>
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
