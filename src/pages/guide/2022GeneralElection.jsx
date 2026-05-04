import Layout from '../../components/Layout';
import GVGCandidateListCSV from '../../components/GVGCandidateListCSV';
import data from '../../data/candidates2022.json';

export default function Guide2022General() {
  return (
    <Layout>
      <h1>GREEN VOTERS GUIDE</h1>
      <h1>2022 General Election</h1>
      <GVGCandidateListCSV data={data} />
    </Layout>
  );
}
