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
    const getLastName = s => {console.log(s.lastIndexOf(" "));console.log(s.substring(s.lastIndexOf(" "))); return s.substring(s.lastIndexOf(" ")+1)};
    const camelize = s => s && s[0].toUpperCase() + s.slice(1).toLowerCase();
    const buildRow = race => {
        return (
            <div className="candidate-row">
                <a name={getRaceAnchor(race.name)}></a>
                <div className="candidate-item">{race.name.replace('STATE', '')}</div>
                <div className="candidate-item">
                {
                    race.candidates.map((candidate, index) => {
                        return (
                            <>
                                {getLastName(candidate.name)}{race.candidates.length > index +1 && ` v `}
                            </>
                        )
                    })
                }
                </div>
            </div>
        )
    }
    if (!data?.cities)
    return <></>;
    return (<div className="candidate-list">
        {data.cities.map((city, index) => {
            return (
                city.races.map((race, index) => {
                    return (
                        <>
                        {race.link !="" ?
                            <a href={race.link} style={{display: 'block'}} target="_blank" rel="noopener noreferrer">
                                {buildRow(race)}
                            </a>
                            :
                            <>{buildRow(race)}</>
                        }
                        </>
                    )
                })
            )
           
        })}
        </div>
    )
}

export default CandidateList
