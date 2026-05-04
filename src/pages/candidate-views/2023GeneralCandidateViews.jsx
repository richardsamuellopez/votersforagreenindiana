import Layout from '../../components/Layout';
import GVGCandidateList from '../../components/GVGCandidateList';
import data from '../../data/candidates.json';

export default function CandidateViews2023General() {
  return (
    <Layout>
      <h1 className="uppercase">Candidate Views</h1>
      <p>This is a nonpartisan summary of the candidate's views, policies, positions, statements and votes related to climate, sustainability and resilience. Due to limited resources, only major party candidates in select contested races are evaluated.</p>
      <h1 className="uppercase green">{data.title}</h1>
      <GVGCandidateList data={data} />
    </Layout>
  );
}
