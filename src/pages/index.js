import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <p>
      <span style={{fontSize:'1.25em'}}>Voters for a Green Indiana</span> is a nonpartisan group of volunteers who take climate change very seriously. We believe candidates who understand the ongoing energy and climate challenges are best qualified to lead us through these changes. Our goal is to inform voters who also care about this issue about candidates who accept climate science, understand this is an important local & global issue, and support policies and actions to reduce carbon pollution.
    </p>
    <ul>
      <li>
        Global warming has been used as a political wedge for a long time, but voters in Indiana are evolving as the signs of a changing climate become more apparent: more heatwaves, milder winters, more heavy rain events, stronger storms, hurricanes and tornadoes, more severe droughts, warming and acidifying oceans, rising sea level, etc. The trifecta of record-breaking hurricanes in 2017 is a case in point. Click here to see the latest US climate report.
      </li>
      <li>
        The science on climate change is settled. The debate is over. <a href="https://nca2018.globalchange.gov/chapter/front-matter-about/" target="_blank">Click here to see the latest US climate report.</a>
      </li>
      <li>
        Climate change is a local issue! Purdue Climate Change Research Center released a series of reports on <a href="https://ag.purdue.edu/indianaclimate/indiana-climate-report/" target="_blank">how climate change is affecting Indiana</a> and how it will impact Indiana's <a href="https://ag.purdue.edu/indianaclimate/hoosier-health-report/" target="_blank">public health</a>, <a href="https://ag.purdue.edu/indianaclimate/urban-ecosystems-report/" target="_blank">urban green spaces</a>, <a href="https://ag.purdue.edu/indianaclimate/forest-ecosystems-report/" target="_blank">forests</a>, <a href="https://ag.purdue.edu/indianaclimate/agriculture-report/" target="_blank">agriculture</a>, <a href="https://ag.purdue.edu/indianaclimate/aquatic-ecosystems-report/" target="_blank">aquatic ecosystems</a>, and <a href="https://ag.purdue.edu/indianaclimate/energy-report/" target="_blank">energy</a>.
      </li>
      <li>
        Almost every major university in Indiana has an Office of Sustainability to address reduction of carbon emissions. 
      </li>
      <li>
        Climate change is a profoundly moral issue. Almost every religion has <a href="https://fore.yale.edu/Climate-Emergency/Climate-Change-Statements-from-World-Religions" target="_blank">a statement on climate change</a> and caring for God's Creation. Who doesn't want clean air, clean water, and a stable climate for our families and communities?
      </li>
    </ul>
  </Layout>
)

export default IndexPage
