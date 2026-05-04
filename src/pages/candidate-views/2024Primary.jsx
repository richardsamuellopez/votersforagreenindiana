import Layout from '../../components/Layout';
import GVGCandidateListPrimary from '../../components/GVGCandidateListPrimary';
import data from '../../data/primaryCandidates2024.json';

export default function CandidateViews2024Primary() {
  return (
    <Layout>
      <div className="flex-container">
        <div className="item">
          <h1 className="uppercase">Candidate Views</h1>
          <p>
            There are many reasons to vote for a candidate: party affiliation, position on taxes, jobs and national security. Here, you'll get a review of the candidate's views on clean energy, clean air, clean water, climate and sustainability! Where available, it includes the candidate's policy positions, voting record, ratings and a listing of campaign contributions from the fossil fuel industry based on publicly available information.
          </p>
          <p>
            In addition, candidates in select races are invited to share their views through a questionnaire. Their responses (if any) are provided. Candidates are contacted several times; lack of a response to our inquiries is noted. Failure to provide voters with their positions indicates their opposition or low priority.
          </p>
          <p>Due to limited volunteer time and resources, only major party candidates in select contested races are evaluated.</p>
          <GVGCandidateListPrimary data={data} />
        </div>
      </div>
    </Layout>
  );
}
