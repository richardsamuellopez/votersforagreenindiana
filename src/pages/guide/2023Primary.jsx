import Layout from '../../components/Layout';
import GVGCandidateListCSV2 from '../../components/GVGCandidateListCSV2';
import data from '../../data/primaryCandidates2023.json';

export default function Guide2023Primary() {
  return (
    <Layout>
      <h1>GREEN VOTERS GUIDE</h1>
      <p>The Green Voters Guide represents a non-partisan evaluation of policies, positions, statements and votes to identify the "greener" candidate(s) within select races. The environmentally-friendly candidate(s) who in our opinion are most likely to address climate issues get a green checkmark. Due to limited resources, only major party candidates in select races are evaluated.</p>
      <h1 className="green">2023 REPUBLICAN PRIMARY</h1>
      <GVGCandidateListCSV2 data={data} />
      <h2 className="green">2023 DEMOCRATIC PRIMARY</h2>
      <p>No contested races in Carmel, Westfield, Noblesville, Zionsville.</p>
    </Layout>
  );
}
