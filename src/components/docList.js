import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const DocList = ({search, exclude}) => {
  const data = useStaticQuery(graphql`
   {
     allFile(
       filter: {
        extension: { eq: "pdf" }
       }
       sort: {
        fields: [name]
        order: DESC
      }
      ) {
       edges {
         node {
           birthTime
           publicURL
           name
         }
       }
     }
   }
 `)

 return (<React.Fragment>
  {data.allFile.edges.map((file, index) => {
    return (
      file.node.name.includes(search) && (exclude ? !file.node.name.includes(exclude) : true) ?
      <li key={`pdf-${index}`}>
        <a href={file.node.publicURL} download>
          {file.node.name}
        </a>
      </li>
      : null
    )
  })}
  
</React.Fragment>
 )
}

export default DocList
