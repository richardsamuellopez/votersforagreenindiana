import React from "react"

const CandidateList = ({data}) => {

    const getRaceAnchor = (city, race) => {
        return `${city.name}_${race.name}`;
    };
    const shortenRaceName = (raceName) => {
        let returnName = raceName.trim();
        returnName = returnName.replace("U.S. HOUSE OF REPRESENTATIVES", "U.S. HOUSE");
        returnName = returnName.replace("FIRST DISTRICT", "DISTRICT 1");
        returnName = returnName.replace("SECOND DISTRICT", "DISTRICT 2");
        returnName = returnName.replace("THIRD DISTRICT", "DISTRICT 3");
        returnName = returnName.replace("FOURTH DISTRICT", "DISTRICT 4");
        returnName = returnName.replace("FIFTH DISTRICT", "DISTRICT 5");
        returnName = returnName.replace("SIXTH DISTRICT", "DISTRICT 6");
        returnName = returnName.replace("SEVENTH DISTRICT", "DISTRICT 7");
        returnName = returnName.replace("EIGTH DISTRICT", "DISTRICT 8");
        returnName = returnName.replace("NINTH DISTRICT", "DISTRICT 9");
        returnName = returnName.replace("INDIANA STATE SENATE INDIANA Senate Dist", "INDIANA SENATE DISTRICT");
        returnName = returnName.replace("INDIANA STATE HOUSE INDIANA House Dist", "INDIANA HOUSE DISTRICT");
        switch(returnName) {
            case 'U.S. PRESIDENT & VICE PRESIDENT':
                // return returnName.replace(' & ', '\n&\n').split('\n').map((text, index) => (
                //     <>
                //       {text}
                //       <br />
                //     </>
                // ))
              return getBeforeAmpersand(returnName);
            case 'STATE GOVERNOR & LT. GOVERNOR':
              return getBeforeAmpersand(returnName);
            default:
              return returnName
          }
    };

    const getBeforeAmpersand = (candidateName) => {
        if(!candidateName)  return "";
        let candidateArray = candidateName.split(' & ');
        return candidateArray[0];
    }
 
    const camelize = s => s && s[0].toUpperCase() + s.slice(1).toLowerCase();
    console.log("MY DATA")
    console.log(data)
    // if (!data?.cities)
    // return <></>;
    return (<div className="candidate-list">

        {/* {data.allCandidatesCsv.nodes.filter(c => c.Race === 'U.S. SENATE').map((race, index) => { */}
        {data.cities.map((city, index) => {
            return (
                <>
                    {city.races.map((race, index) => {
                        return (
                            <a href={race.link} style={{display: 'block'}} target="_blank" rel="noopener noreferrer">
                                <div className="candidate-row">
                                    <a name={getRaceAnchor(city, race)}></a>
                                    <div className="candidate-item">{shortenRaceName(`${city.name} ${race.name}`)}</div>
                                    <div className="candidate-item">{getBeforeAmpersand(race.candidates[0]?.name)}</div>
                                    <div className="candidate-item">{getBeforeAmpersand(race.candidates[1]?.name)}</div>
                                </div>
                            </a>
                        )
                    })}
                </>
            )
        })}
        </div>
    )
}

export default CandidateList
