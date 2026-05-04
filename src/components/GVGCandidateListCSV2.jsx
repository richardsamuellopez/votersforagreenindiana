import Check from './Check';

export default function GVGCandidateListCSV2({ data }) {
  if (!data?.nodes) return null;

  return (
    <div className="candidate-list">
      {data.nodes.map((race, i) => (
        <div key={i}>
          <h2 className="gvg-race green">{race.Race.replace('STATE', '')}<a name={race.Race.replace(/ /g, '')}></a></h2>
          <div className="gvg-race-row">
            {[1, 2, 3, 4, 5].map(n => race[`Name${n}`] ? (
              <div key={n} className="gvg-candidate-item">
                <div className="gvg-preferred">
                  {race[`Preferred${n}`] && race[`Double${n}`]
                    ? <div style={{ display: 'flex' }}><Check /><Check className="second-check" /></div>
                    : race[`Preferred${n}`] && <Check />}
                  {race[`Potential${n}`] && <div className="potential-advocate">Potential Advocate</div>}
                </div>
                <div className="gvg-column-2">
                  <div className="gvg-name">
                    {race[`Name${n}`]} - {race[`Party${n}`]}
                    <span className="gvg-incumbent">
                      {race[`Incumbent${n}`] === 'Y' && '(Incumbent)'}
                      {race[`Uncontested${n}`] === 'Y' && ' - uncontested'}
                    </span>
                  </div>
                  <div className="gvg-info">{race[`Info${n}`]}&nbsp;</div>
                </div>
              </div>
            ) : null)}
            {race.Link && (
              <div className="gvg-candidate-item">
                <div className="gvg-preferred"></div>
                <div className="gvg-column-2">
                  <a href={race.Link} target="_blank" rel="noopener noreferrer">Read more about these candidates.</a>
                </div>
              </div>
            )}
            {race.RaceInfo && <div>{race.RaceInfo}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
