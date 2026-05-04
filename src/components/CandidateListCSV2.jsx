const getLastName = (s) => s ? s.substring(s.lastIndexOf(' ') + 1) : '';

export default function CandidateListCSV2({ data }) {
  if (!data?.nodes) return null;

  return (
    <div className="candidate-list">
      {data.nodes.map((race, i) => (
        <a key={i} href={race.Link} style={{ display: 'block' }} target="_blank" rel="noopener noreferrer">
          <div className="candidate-row">
            <a name={race.Race.replace(/ /g, '')}></a>
            <div className="candidate-item">{race.Race.replace('STATE', '')}</div>
            <div className="candidate-item">
              {[race.Name1, race.Name2, race.Name3, race.Name4, race.Name5]
                .filter(Boolean)
                .map((name, j, arr) => (
                  <span key={j}>{getLastName(name)}{j < arr.length - 1 ? ' v ' : ''}</span>
                ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
