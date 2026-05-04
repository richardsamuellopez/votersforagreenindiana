import Layout from '../../components/Layout';
import CandidateListCSV from '../../components/CandidateListCSV';
import data from '../../data/candidates2022.json';

export default function CandidateViews2022General() {
  return (
    <Layout>
      <h1 className="uppercase">2022 General Election Candidate Views</h1>
      <CandidateListCSV data={data} />
    </Layout>
  );
}
