import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slugify = (str) => str.trim().replace(/\s+/g, '-');

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

// Interactive candidate list used by the 2026 General page: expandable rows
// with public-record info and a questionnaire section, fed by the live
// Google Sheets data in CandidateViewsContent. Styled entirely under the
// "live-" prefixed classes in candidate-views.css so it can't bleed into
// the plain CandidateList used by older/static years.
export default function CandidateListLive({ data }) {
  const [expandedRaces, setExpandedRaces] = useState(new Set());

  useEffect(() => {
    if (!data?.cities) return;
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, ''));
    if (!hash) return;
    setExpandedRaces((prev) => new Set(prev).add(hash));
    // Wait a tick for the panel above to render before measuring scroll position.
    requestAnimationFrame(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [data]);

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
    <div >
      {data.cities.map((city, i) => (
        <div>
          <h1 className="uppercase green">{city.name}</h1>
          <div key={i} className="live-candidate-list">
            {city.races.map((race, j) => {
              const raceKey = slugify(shortenRaceName(`${race.name}`));
              const isExpanded = expandedRaces.has(raceKey);
              return (
                <div key={j}>
                  <a
                    href={`#${raceKey}`}
                    style={{ display: 'block' }}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleRace(raceKey);
                    }}
                  >
                    <div className="live-candidate-row">
                      <a id={raceKey} name={raceKey}></a>
                      <div className="live-candidate-item live-candidate-item-race" style={{paddingLeft: 0, textAlign: 'center'}}>
                        {shortenRaceName(`${race.name}`)}
                      </div>
                      <div className="live-candidate-names-row">
                        <div className="live-candidate-item" style={{paddingLeft: 0, textAlign: 'center'}}>{getBeforeAmpersand(race.candidates[0]?.name)}</div>
                        <div className="live-candidate-item live-candidate-item-toggle" style={{paddingLeft: 0, textAlign: 'center'}}>
                          <div style={{flex: 1, paddingLeft: 0, textAlign: 'center'}}>{getBeforeAmpersand(race.candidates[1]?.name)}</div>
                          <svg
                            className={`live-expand-icon${isExpanded ? ' expanded' : ''}`}
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
                    <div className="live-candidate-info-panel">
                      <div className="live-public-record-banner">PUBLIC RECORD</div>
                      <div className="live-candidate-names-row">
                        <div className="live-info" dangerouslySetInnerHTML={{ __html: race.candidates[0]?.race_sheet_info || '' }} />
                        <div className="live-info" dangerouslySetInnerHTML={{ __html: race.candidates[1]?.race_sheet_info || '' }} />
                      </div>
                      {/* <div className="live-questionnaire">
                        <div className="live-questionnaire-banner">QUESTIONNAIRE</div>
                        <div className="live-candidate-names-row">
                          <div className="live-candidate-item">{getBeforeAmpersand(race.candidates[0]?.name)}</div>
                          <div className="live-candidate-item">{getBeforeAmpersand(race.candidates[1]?.name)}</div>
                        </div>
                        {(Array.isArray(race.candidates[0]?.questions) ? race.candidates[0].questions : [])
                          .map((question, k) => ({ question, k }))
                          .filter(({ question }) => question)
                          .map(({ question, k }) => (
                          <div key={k} className="live-questionnaire-item">
                            <div className="live-candidate-item live-candidate-item-question">{question}</div>
                            <div className="live-candidate-names-row">
                              <div className="live-candidate-item">{race.candidates[0]?.answers?.[k]}</div>
                              <div className="live-candidate-item">{race.candidates[1]?.answers?.[k]}</div>
                            </div>
                          </div>
                        ))}
                      </div> */}
                      {race.link && (
                        <a href={race.link} target="_blank" rel="noopener noreferrer">Read more about these candidates.</a>
                      )}
                      <Link to="/guide" className="live-gvg-button">Green Voters Guide</Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
