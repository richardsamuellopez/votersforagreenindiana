import React from "react"
import Check from './check';

const GVGCandidateListPrimary = ({data}) => {
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
        {data.primaries.map((primary, index) => {
            return (
                <div key={index}>
                    <h1 style={{textAlign: 'center' }} className="uppercase green">{primary.name}</h1>
                    {primary.name.includes("Republican") && <a name="Rep"></a>}
                    {primary.name.includes("Democratic") && <a name="Dem"></a>}
                    {primary.groups.map((group, index) => {
                     return (
                        <>
                        <h2 style={{borderTop: '1px solid black', borderBottom: '1px solid black'}} className="uppercase green">{group.name}</h2>
                        { group.races.length ===0 && 
                            <div style={{ paddingBottom: '20px' }}>Uncontested races are not covered.</div>
                        }
                        {group.races.map((race, index) => {
                            return (
                                <div key={index}>
                                    <h3 className="gvg-race uppercase bold">{race.name.replace('STATE', '')}{race.openSeat && <span style={{fontWeight: '100'}}> (OPEN SEAT)</span>}
                                        <a name={race.name.replace(/ /g, '')}></a>
                                    </h3>
                                    {race.info &&<div>{race.info}</div>}
                                    {race.noVote &&
                                        <>
                                            <div style={{color: 'red', fontStyle: 'italic', fontSize: '14px'}}>We regret none of these candidates are strong advocates for sustainability solutions.</div>
                                            <div style={{color: 'red', fontStyle: 'italic', fontSize: '14px'}}>We do not recommend voting for anyone in this race.</div>
                                        </>
                                    }
                                    <div className="gvg-race-row">
                                        {race.candidates.map((candidate, index) => {
                                            return (
                                                <div className="gvg-candidate-item" style={{borderBottom: '1px solid black'}}>
                                                    <div className="gvg-column-2" style={{width: '40%' }}>
                                                        <div className="gvg-name" style={{padding: '10px'}}>
                                                            {/* { candidate.link ?
                                                                <a href={candidate.link}>{candidate.name}</a>
                                                            : */}
                                                                {candidate.name}
                                                            {/* }, {candidate.party && candidate.party.toUpperCase()}<span className="gvg-incumbent">{candidate.incumbent ==='Y' && "(Incumbent)"}{candidate.uncontested === 'Y' && "- uncontested"}</span> */}
                                                            </div>
                                                        { (candidate.preferred || candidate.potental || candidate.badInfo) &&
                                                        <div className="gvg-preferred" style={{paddingLeft: '10px', fontWeight: 'bold'}}>
                                                            { candidate.preferred && candidate.double ?
                                                                <div style={{display: 'flex'}}><Check /><Check className="second-check" /></div>
                                                            : candidate.preferred && <Check />
                                                            }
                                                            { candidate.potential && <div className="potential-advocate">Potential Advocate</div>}
                                                            { candidate.badInfo && <div className="bad-candidate" style={{display: 'flex', color: 'red'}}><div style={{paddingRight: '2px', fontSize: '32px', }}>X </div><div className="badInfo">{candidate.badInfo}</div></div>}
                                                        </div>
                                                        }
                                                    </div>
                                                    <div className="gvg-info" style={{ padding: '10px', borderLeft: '1px solid black' }}>{candidate.info}&nbsp;</div>
                                                </div>
                                            )
                                        })}
                                    </div>

                                    {/* <div className="gvg-candidate-item">
                                        <div className="gvg-preferred"></div> */}
                                            {data.guideLink &&
                                                <div className="gvg-column-2" style={{paddingBottom: '20px'}}>
                                                    <a href={data.guideLink} target="_blank" rel="noopener noreferrer">Click here for more info.</a>
                                                </div>
                                            }
                                    {/* </div> */}
                                </div>
                            )
                        })}
                        </>
                     )
                    })}
                
                </div>
            )
        })}
        </div>
    )
}

export default GVGCandidateListPrimary
