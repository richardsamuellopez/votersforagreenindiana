import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const GVGCandidateList = ({query}) => {
    const image = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "vgi-check.png" }) {
        childImageSharp {
          fixed(width: 50, height: 25) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
    const data = useStaticQuery(graphql`
    {
        allCandidatesCsv {
            nodes {
                Race
                Republican
                Rinfo
                Democrat
                Dinfo
                Incumbent
                Preferred
                Link
            }
        }
    }
    `);

    return (<div className="candidate-list">
        {data.allCandidatesCsv.nodes.map((race, index) => {
            return (
                <div>
                    { index === 1 &&
                        <h2 className="gvg-race green">U.S. HOUSE OF REPRESENTATIVES</h2>
                    }
                    { race.Race !== 'U.S. SENATE' ?
                        <div className="gvg-race">{race.Race}</div>
                        : <h2 className="gvg-race green">{race.Race}</h2>
                    }
                    <div className="gvg-race-row">
                        <div className="gvg-candidate-item">
                                <div className="gvg-preferred">&nbsp;{race.Preferred==='R' && <Img fixed={image.placeholderImage.childImageSharp.fixed} />}</div>
                                <div className="gvg-column-2">
                                    <div className="gvg-name">{race.Republican} - R<span className="gvg-incumbent">{race.Incumbent==='R' && "(Incumbent)"}</span></div>
                                    <div className="gvg-info">{race.Rinfo}</div>
                                </div>
                        </div>
                        <div className="gvg-candidate-item">
                                <div className="gvg-preferred">{race.Preferred==='D' && <Img fixed={image.placeholderImage.childImageSharp.fixed} />}</div>
                                <div className="gvg-column-2">
                                    <div className="gvg-name">{race.Democrat} - D<span className="gvg-incumbent">{race.Incumbent==='D' && "(Incumbent)"}</span></div>
                                    <div className="gvg-info">{race.Dinfo}</div>
                                </div>
                        </div>
                        <div className="gvg-candidate-item">
                            <div className="gvg-preferred"></div>
                            <div className="gvg-column-2">
                                <a href={race.Link}>Read more about these candidates.</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    )
}

export default GVGCandidateList
