import { useState } from 'react';
import { Link } from 'react-router-dom';

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
  const [expandedRaces, setExpandedRaces] = useState(new Set());

  if (!data?.cities) return null;

  const toggleRace = (raceKey) => {
    setExpandedRaces((prev) => {
      const next = new Set(prev);
      if (next.has(raceKey)) {
        next.delete(raceKey);
      } else {
        next.add(raceKey);
      }
      return next;
    });
  };

  return (
    <div className="candidate-list">
      {data.cities.map((city, i) => (
        <div key={i}>
          {city.races.map((race, j) => {
            const raceKey = `${city.name}_${race.name}`;
            const isExpanded = expandedRaces.has(raceKey);
            return (
              <div key={j}>
                <a
                  href="#"
                  style={{ display: 'block' }}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleRace(raceKey);
                  }}
                >
                  <div className="candidate-row">
                    <a name={raceKey}></a>
                    <div className="candidate-item candidate-item-race">{shortenRaceName(`${city.name} ${race.name}`)}</div>
                    <div className="candidate-names-row">
                      <div className="candidate-item">{getBeforeAmpersand(race.candidates[0]?.name)}</div>
                      <div className="candidate-item candidate-item-toggle">
                        <span>{getBeforeAmpersand(race.candidates[1]?.name)}</span>
                        <svg
                          className={`expand-icon${isExpanded ? ' expanded' : ''}`}
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
                {isExpanded && (
                  <div className="candidate-info-panel">
                    <div className="public-record-banner">PUBLIC RECORD</div>
                    <div className="candidate-names-row">
                      <div className="gvg-info" dangerouslySetInnerHTML={{ __html: race.candidates[0]?.race_sheet_info || '' }} />
                      <div className="gvg-info" dangerouslySetInnerHTML={{ __html: race.candidates[1]?.race_sheet_info || '' }} />
                    </div>
                    <div className="questionnaire">
                      <div className="questionnaire-banner">QUESTIONNAIRE</div>
                      <div className="candidate-names-row">
                        <div className="candidate-item">{getBeforeAmpersand(race.candidates[0]?.name)}</div>
                        <div className="candidate-item">{getBeforeAmpersand(race.candidates[1]?.name)}</div>
                      </div>
                      {(Array.isArray(race.candidates[0]?.questions) ? race.candidates[0].questions : [])
                        .map((question, k) => ({ question, k }))
                        .filter(({ question }) => question)
                        .map(({ question, k }) => (
                        <div key={k} className="questionnaire-item">
                          <div className="candidate-item candidate-item-question">{question}</div>
                          <div className="candidate-names-row">
                            <div className="candidate-item">{race.candidates[0]?.answers?.[k]}</div>
                            <div className="candidate-item">{race.candidates[1]?.answers?.[k]}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {race.link && (
                      <a href={race.link} target="_blank" rel="noopener noreferrer">Read more about these candidates.</a>
                    )}
                    <Link to="/guide" className="gvg-button">Green Voters Guide</Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
