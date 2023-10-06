import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DocList from "../components/docList";
import './index.css';
import {Link} from "gatsby";

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="flex-container">
      <div className="item">
        <p>
          <span style={{fontSize:'1.5em', fontWeight: 'bold'}}>Voters for a Green Indiana</span> is a nonpartisan group of volunteers who take climate change  seriously. We believe candidates who understand the ongoing energy and climate challenges are best qualified to lead us through these changes. Our goal is to inform voters about candidates who accept climate science, understand this is an important local & global issue, and support policies and actions to reduce carbon pollution.
        </p>
        <p>
          Global warming has been used as a political wedge for a long time, but voters in Indiana are evolving as the signs of a changing climate become more apparent: more heatwaves, milder winters, more heavy rain events, stronger storms, hurricanes and tornadoes, more severe droughts, warming and acidifying oceans, rising sea level, etc.   A <a href="https://climatecommunication.yale.edu/publications/for-the-first-time-the-alarmed-are-now-the-largest-of-global-warmings-six-americas/" target="_blank" rel="noopener noreferrer">Yale study</a> shows 57% of Americans are concerned or alarmed about climate change. Here in Indiana, the <a href="https://www.indystar.com/story/news/environment/2020/09/18/new-poll-hoosiers-say-government-needs-do-more-climate-change/5819240002/" target="_blank" rel="noopener noreferrer">Indianapolis Star</a> reports Hoosier voters are much more concerned about climate change than ever before: 80% of survey respondents prioritize the environment over the economy, with majorities of both major political parties now in support.
        </p>
        <p>
          The science on climate change is settled. The debate is over.  <a href="https://sites.nationalacademies.org/sites/climate/index.htm" target="_blank" rel="noopener noreferrer">The National Academy of Sciences</a> and the <a href="https://nca2018.globalchange.gov/chapter/front-matter-about/" target="_blank" rel="noopener noreferrer">US Climate Report</a> have determined that climate change is a serious problem, and the burning of fossil fuels is the major contributing factor.
        </p>
        <p>
        The U.S. Global Change Research Program, the government authority on climate change, reports that global warming poses a severe threat to American’s health and the country’s infrastructure, economy and natural resources, and also warns about the threat of irreversible runaway climate change.
        </p>
        <p>
          Climate change is a local issue! The <a href="https://ag.purdue.edu/indianaclimate/" target="_blank" rel="noopener noreferrer">Purdue Climate Change Research Center</a> reports on how climate change is impacting Indiana’s <a href="https://ag.purdue.edu/indianaclimate/hoosier-health-report/" target="_blank" rel="noopener noreferrer">public health</a>, <a href="https://ag.purdue.edu/indianaclimate/urban-ecosystems-report/" target="_blank" rel="noopener noreferrer">urban green spaces</a>, <a href="https://ag.purdue.edu/indianaclimate/forest-ecosystems-report/" target="_blank" rel="noopener noreferrer">forests</a>, <a href="https://ag.purdue.edu/indianaclimate/agriculture-report/" target="_blank" rel="noopener noreferrer">agriculture</a>, <a href="https://ag.purdue.edu/indianaclimate/aquatic-ecosystems-report/" target="_blank" rel="noopener noreferrer">aquatic ecosystems</a>, and <a href="https://ag.purdue.edu/indianaclimate/energy-report/" target="_blank" rel="noopener noreferrer">energy</a>.
        </p>
        <p>
          Almost every major university in Indiana has an Office of Sustainability to address reduction of carbon emissions.
        </p>
        <p>
          Climate change is a profoundly moral issue. Almost every religion has <a href="https://fore.yale.edu/Climate-Emergency/Climate-Change-Statements-from-World-Religions" target="_blank" rel="noopener noreferrer">a faith-based statement on climate change</a> and caring for God's Creation. Who doesn't want clean air, clean water, and a stable climate for our families and communities?
        </p>
      </div>
      <div className="item">
        <ul>
          {/* <DocList search="Press Release" /> */}
          <Link to={'https://mail.google.com/mail/u/0?ui=2&ik=7c247fb2d1&attid=0.1&permmsgid=msg-f:1779018476668056521&th=18b057e0fea7f3c9&view=att&disp=inline'}>2023 General – Press Release</Link>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
