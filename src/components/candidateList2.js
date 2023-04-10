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
    const getLastName = s => {console.log(s.lastIndexOf(" "));console.log(s.substring(s.lastIndexOf(" "))); return s.substring(s.lastIndexOf(" "))};
    const camelize = s => s && s[0].toUpperCase() + s.slice(1).toLowerCase();

    return (<div className="candidate-list">

        {/* {data.allCandidatesCsv.nodes.filter(c => c.Race === 'U.S. SENATE').map((race, index) => { */}
        {data.nodes.map((race, index) => {
            return (
                <a href={race.Link} style={{display: 'block'}} target="_blank" rel="noopener noreferrer">
                    <div className="candidate-row">
                        <a name={getRaceAnchor(race.Race)}></a>
                        <div className="candidate-item">{race.Race.replace('STATE', '')}</div>
                        <div className="candidate-item">{getLastName(race.Name1)}{race.Name2 && ` v ${getLastName(race.Name2)}`}{race.Name3 && ` v ${getLastName(race.Name3)}`}{race.Name4 && ` v ${getLastName(race.Name4)}`}{race.Name5 && ` v ${getLastName(race.Name5)}`}</div>
                    </div>
                </a>
            )
        })}
        </div>
    )
}

export default CandidateList
