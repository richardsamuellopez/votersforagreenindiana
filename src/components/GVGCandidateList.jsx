import Check from './Check';

export default function GVGCandidateList({ data }) {
  if (!data?.cities) return null;

  return (
    <div className="candidate-list">
      {data.cities.map((city, i) => (
        <div key={i}>
          <h1 className="uppercase green">{city.name}</h1>
          {city.races.map((race, j) => (
            <div key={j}>
              <h3 className="gvg-race uppercase bold">
                {race.name.replace('STATE', '')}
                <a name={race.name.replace(/ /g, '')}></a>
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
                        {candidate.link ? <a href={candidate.link}>{candidate.name}</a> : candidate.name}
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
          ))}
        </div>
      ))}
    </div>
  );
}
