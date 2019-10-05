import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <p>
      <span style={{fontSize:'1.25em'}}>Voters for a Green Indiana</span> is a nonpartisan group of volunteers who take climate change very seriously.  We believe candidates who understand the ongoing energy and climate challenges are best qualified to lead us through these changes.  Our goal is to inform voters who also care about this issue about candidates who accept climate science, understand this is an important local & global issue, and support policies and actions to reduce carbon pollution.
    </p>
    <ul>
      <li>
        Global warming has been used as a political wedge issue for a long time, but voters are evolving as the signs of a changing climate become more apparent: more heatwaves, milder winters, more heavy rain events, stronger storms, hurricanes and tornadoes, more severe droughts, warming oceans, rising sea level, etc. The trifecta of record-breaking hurricanes in 2017 is a case in point.  Click here to see the latest US climate report.
      </li>
      <li>
        The science on climate change is settled.  The debate is over.  Click here to see the latest US climate report.
      </li>
      <li>
        Climate change is a local issue!  Purdue Climate Change Research Center released a series of reports on how climate change is affecting Indiana and how it will impact Indiana's public health, urban green spaces, forests, agriculture, aquatic ecosystems, and energy. 
      </li>
      <li>
        Almost every major university in Indiana has an Office of Sustainability to address reduction of carbon emissions. 
      </li>
      <li>
        Almost every school in the Carmel Clay school district has a green team, and Carmel High School received the Green Ribbon award from the Department of Education.  
      </li>
      <li>
        Climate change is a profoundly moral issue.  Almost every religion has a statement on climate change and caring for God's Creation.  Who doesn't want to protect our air, water, ecosystems and climate for our families?
      </li>
    </ul>
  </Layout>
)

export default IndexPage
