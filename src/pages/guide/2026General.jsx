import Layout from '../../components/Layout';
import GuideContent from '../../components/GuideContent';

export default function Guide2026General() {
  return (
    <Layout>
      <h1>2026 GENERAL ELECTION GREEN VOTERS GUIDE</h1>
      <div className="flex-container">
        <div className="item">
          <p>
            The Green Voters Guide represents a non-partisan evaluation of voting records, ratings, policy positions, campaign priorities and financial contributions from the fossil fuel industry to identify the "greener" candidate(s) within select races. Due to limited resources, only major party candidates in select contested races are evaluated. Evaluations are conducted by a non-partisan committee of 1 Republican, 1 Democrat and 1 Independent who care deeply about addressing climate change. The environmentally-friendly candidates who in our opinion are most likely to address climate issues get a green checkmark.
          </p>
          <p>
            <b><u>Election Information</u></b>
            <ul>
              <li>To see your ballot, your voting location, and voting status, go to <a href="https://indianavoters.in.gov/">https://indianavoters.in.gov/</a>.</li>
              <li>To find your current elected officials, go to <a href="http://iga.in.gov/legislative/find-legislators/">http://iga.in.gov/legislative/find-legislators/</a></li>
            </ul>
          </p>
          <GuideContent />
        </div>
      </div>
    </Layout>
  );
}
