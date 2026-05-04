const getBeforeAmpersand = (str) => {
  if (!str) return '';
  return str.split(' & ')[0];
};

const shortenRaceName = (raceName) => {
  let name = raceName.trim();
  name = name.replace('U.S. HOUSE OF REPRESENTATIVES', 'U.S. HOUSE');
  name = name.replace('FIRST DISTRICT', 'DISTRICT 1');
  name = name.replace('SECOND DISTRICT', 'DISTRICT 2');
  name = name.replace('THIRD DISTRICT', 'DISTRICT 3');
  name = name.replace('FOURTH DISTRICT', 'DISTRICT 4');
  name = name.replace('FIFTH DISTRICT', 'DISTRICT 5');
  name = name.replace('SIXTH DISTRICT', 'DISTRICT 6');
  name = name.replace('SEVENTH DISTRICT', 'DISTRICT 7');
  name = name.replace('EIGTH DISTRICT', 'DISTRICT 8');
  name = name.replace('NINTH DISTRICT', 'DISTRICT 9');
  name = name.replace('INDIANA STATE SENATE INDIANA Senate Dist', 'INDIANA SENATE DISTRICT');
  name = name.replace('INDIANA STATE HOUSE State House Dist', 'INDIANA HOUSE DISTRICT');
  if (name === 'U.S. PRESIDENT & VICE PRESIDENT' || name === 'STATE GOVERNOR & LT. GOVERNOR') {
    return getBeforeAmpersand(name);
  }
  return name;
};

export default function CandidateList({ data }) {
  if (!data?.cities) return null;

  return (
    <div className="candidate-list">
      {data.cities.map((city, i) => (
        <div key={i}>
          {city.races.map((race, j) => (
            <a key={j} href={race.link} style={{ display: 'block' }} target="_blank" rel="noopener noreferrer">
              <div className="candidate-row">
                <a name={`${city.name}_${race.name}`}></a>
                <div className="candidate-item">{shortenRaceName(`${city.name} ${race.name}`)}</div>
                <div className="candidate-item">{getBeforeAmpersand(race.candidates[0]?.name)}</div>
                <div className="candidate-item">{getBeforeAmpersand(race.candidates[1]?.name)}</div>
              </div>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}
