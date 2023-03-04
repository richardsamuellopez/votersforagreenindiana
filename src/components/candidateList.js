import React from "react"

const CandidateList = ({data}) => {

    const getRaceAnchor = (race) => {
        let myArray = race.split(' ');
        if(race.includes('COUNTY')) {
            myArray = myArray.map(item => camelize(item));
            myArray[1]='Co';
            myArray[3]='Dist';
        }
        return myArray.join('');
    };

    const camelize = s => s && s[0].toUpperCase() + s.slice(1).toLowerCase();

    return (<div className="candidate-list">

        {/* {data.allCandidatesCsv.nodes.filter(c => c.Race === 'U.S. SENATE').map((race, index) => { */}
        {data.nodes.map((race, index) => {
            return (
                <a href={race.Link} style={{display: 'block'}} target="_blank" rel="noopener noreferrer">
                    <div className="candidate-row">
                        <a name={getRaceAnchor(race.Race)}></a>
                        <div className="candidate-item">{race.Race.replace('STATE', '')}</div>
                        <div className="candidate-item">{race.CandidateA}</div>
                        <div className="candidate-item">{race.CandidateB}</div>
                    </div>
                </a>
            )
        })}
        </div>
    )
}

export default CandidateList
