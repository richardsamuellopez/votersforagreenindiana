export default function CandidateListCSV({ data }) {
  if (!data?.nodes) return null;

  return (
    <div className="candidate-list">
      {data.nodes.map((race, i) => (
        <a key={i} href={race.Link} style={{ display: 'block' }} target="_blank" rel="noopener noreferrer">
          <div className="candidate-row">
            <a name={race.Race.replace(/ /g, '')}></a>
            <div className="candidate-item">{race.Race.replace('STATE', '')}</div>
            <div className="candidate-item">{race.CandidateA}</div>
            <div className="candidate-item">{race.CandidateB}</div>
          </div>
        </a>
      ))}
    </div>
  );
}
