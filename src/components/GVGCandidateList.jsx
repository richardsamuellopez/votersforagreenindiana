import Check from './Check';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const slugify = (str) => str.trim().replace(/\s+/g, '-');

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

export default function GVGCandidateList({ data }) {
  if (!data?.cities) return null;
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

  return (
    <div className="candidate-list-gvg">
      {data.cities.map((city, i) => (
        <div key={i}>
          <h1 className="uppercase green">{city.name}</h1>
          {city.races.map((race, j) => {
              const raceKey = slugify(shortenRaceName(`${race.name}`));
              return (
                <div key={j}>
                  <h3 className="gvg-race uppercase bold">
                    {race.name.replace('STATE', '')}
                    <a id={raceKey} name={race.name.replace(/ /g, '')}></a>
                  </h3>
                  <div className="gvg-race-row">
                    {race.info && (
                      <div className="gvg-candidate-item">
                        <div className="gvg-preferred"></div>
                        <div className="gvg-column-2">{race.info}</div>
                      </div>
                    )}
                    {race.candidates.map((candidate, k) => (
                      <div key={k} className="gvg-candidate-item">
                        <div className="gvg-preferred">
                          {candidate.preferred === 'dislike' || candidate.preferred === 'n' ? (
                            <div className="bad-candidate" style={{ display: 'flex', color: 'red', padding: '5px 25px', fontSize: '32px' }}>X</div>
                          ) : candidate.preferred && candidate.double ? (
                            <div style={{ display: 'flex' }}><Check /><Check className="second-check" /></div>
                          ) : (
                            candidate.preferred && <Check />
                          )}
                          {candidate.potential && <div className="potential-advocate">Potential Advocate</div>}
                        </div>
                        <div className="gvg-column-2">
                          <div className="gvg-name">
                            <Link to={`/candidate-views/#${raceKey}`}>{candidate.name}</Link>
                            {/* {candidate.link ? <a href={candidate.link}>{candidate.name}</a> : candidate.name} */}
                            , {candidate.party.toUpperCase()}
                            <span className="gvg-incumbent">
                              {candidate.incumbent && '(Incumbent)'}
                              {candidate.uncontested && ' - uncontested'}
                            </span>
                          </div>
                          <div className="gvg-info">{candidate.info}&nbsp;</div>
                        </div>
                      </div>
                    ))}
                    <div className="gvg-candidate-item">
                      <div className="gvg-preferred"></div>
                      <div className="gvg-column-2">
                        {race.link && (
                          <a href={race.link} target="_blank" rel="noopener noreferrer">Read more about these candidates.</a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
}
