import Layout from '../../components/Layout';
import CandidateViewsContent from '../../components/CandidateViewsContent';
import CandidateListLive from '../../components/CandidateListLive';
import data from '../../data/generalCandidates2026.json';

export default function CandidateViews2026General() {
  return (
    <Layout>
      <div className="flex-container">
        <div className="item">
          <h1 className="uppercase">2026 General Election Candidate Views</h1>
          <p>
            There are many reasons to vote for a candidate: party affiliation, position on taxes, inflation, jobs, the Iran war and the Epstein files.</p>
          <p>
            Here, we focus on clean air, clean water, clean energy, healthy soil, sustainability and resilience.
          </p>
          <p>
            Data centers are the big affordability and climate issue this election cycle.  In recent years, Indiana legislators have passed several <a href="https://drive.google.com/file/d/1sFvC0p1MLOLPrwsmzkAlDBckYi5DUgYQ/view" target="_blank">bills</a> designed to attract data centers, including tax exemptions and policies to keep aging coal plants running beyond their useful life and fast-track new gas plants to power them. These policies also allow utility trackers that shift costs onto ratepayers, while continued reliance on coal and gas plants will increase heat-trapping carbon pollution for years to come. That’s especially concerning as Hoosiers face an energy affordability crisis and dozens of communities are still recovering from a historic climate disaster in August that caused an estimated $5 billion in flood damage.  Frequent <a href="https://www.ncei.noaa.gbillions/time-series/IN/cost" target="_blank">billion-dollar disasters</a> are making home insurance affordability an issue. We can’t afford increasingly severe and dangerous <a href="https://eri.iu.edu/resources/fact-sheets/extreme-heat-in-indiana.html" target="_blank">heat</a>,<a href="https://www.in.gov/drought/" target="_blank"> drought</a>, and<a href="https://www.theguardian.com/us-news/2026/aug/30/indiana-flooding-emergency-response" target="_blank"> floods</a>.
          </p>
          <p>
            <b><i>We’ve done the research for you!</i></b>
          </p>
          <p>
            <ul>
              <li>
                We look at <a href="https://drive.google.com/file/d/1sFvC0p1MLOLPrwsmzkAlDBckYi5DUgYQ/view" target="_blank">voting records on key 2025-2026 bills</a> and campaign priorities.
              </li>
              <li>
                In addition, candidates in select races are invited to share their views through a questionnaire. Their responses (if any) are provided. Candidates are contacted several times; lack of a response to our inquiries is noted. Failure to provide voters with their positions indicates their opposition or low priority.
              </li>
              <li>
                Due to limited volunteer time and resources, only major party candidates in select contested races are evaluated.
              </li>
            </ul>
          </p>
          <p>
            <b>Click below for a NON-PARTISAN review of voting records and campaign priorities related to utility affordability, data centers, renewable energy and the environment and a summary of questionnaire responses.</b>
          </p>
          <p>
            For a quick look at the green candidates, go to the Voters Guide.
          </p>
          <CandidateViewsContent staticData={data} ListComponent={CandidateListLive} />
        </div>
      </div>
    </Layout>
  );
}
