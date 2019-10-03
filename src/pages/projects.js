import React, { useState } from 'react'
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default () => {
  const [projectTypeFilter, setProjectTypeFilter] = useState("All")

  const handleChange = e => {
    setProjectTypeFilter(e.target.value)
  }

   const data = useStaticQuery(
        graphql`
        query {
          allAirtable  {
              edges {
                node {
                  recordId 
                  data {
                    Your_Name
                    Project_Type
                    Project_Name
                    Project_Link
                    Link_To_Portfolio
                    
                }
              }
            }
          }
        }
        `
      )
        console.log(data.allAirtable)
      const projectTypes = ["All", ...Array.from(new Set(data.allAirtable.edges.map(project => project.node.data.Project_Type)))]
 
      const projectTypeOptions = projectTypes.map(function(type) {
        return <option value={type}>{type}</option>
        
      }) 
      console.log(projectTypes)
      
     const filteredProjects =
      data.allAirtable.edges.filter(project => project.node.data.Project_Type === projectTypeFilter || projectTypeFilter === "All")
        .map(project => (
          <div className="projectCard" key={project.node.recordId}>
            <h1><a href={project.node.data.Project_Link} target="_blank" rel="noopener noreferrer">{project.node.data.Project_Name}</a></h1>
            <h3>by {project.node.data.Your_Name}</h3>
            <p>{project.node.data.Project_Type}</p>
            <p><a href={project.node.data.Link_To_Portfolio} target="blank" rel="noopener noreferrer">Portfolio</a></p>
            <p><a href={project.node.data.Screenshot} target="_blank" rel="noopener noreferrer">{project.node.data.Screenshot}</a></p>
            <p><a href={project.node.data.Monkey} target="_blank" rel="noopener noreferrer">{project.node.data.Monkey}</a></p>
            <div>
              {/* <img class="thumbnail" src={project.node.data.Screen_Shot} alt="" frameborder="0" allowfullscreen overflow="hidden"></img>   */}
            </div> 
        </div>

))
      return (
        <Layout>
          <div
            css={css`
              margin: 0 auto;
              max-width: 700px;
             
            `}
          >
              <select 
                  value={projectTypeFilter}
                  // onChange={handleChange}
                  onChange={handleChange}>
                 {projectTypeOptions}
              </select>
           
            {filteredProjects}

            <Link to={`/`}>
              <h3
                css={css`
                  
                  display: inline-block;
                  font-style: normal;
                `}
              >
              </h3>
            </Link>
            <Link
              to={`/about/`}
              css={css`
                float: right;
              `}
            ></Link>
              
           
          </div>
    
        </Layout>
      )
}

// export default Projects 

// Possibly helpful links:
// https://www.gatsbyjs.org/packages/gatsby-source-airtable/
// https://airtable.com/appq62L2af4g5N4lL/api/docs#curl/introduction
// https://medium.com/@sgpropguide/fetching-data-from-airtable-into-gatsby-fd74b97170c9
// https://github.com/kevzettler/gatsby-source-airtable/issues/12
// https://blog.airtable.com/build-your-own-custom-blog-cms-with-airtable-and-gatsbyjs/

// Questions for Bob: What info is on Contentful site?
// How to connect to Airtable on this site
// vulnerabilities on Github - just normal maintenance? What's the best way to deal with them?
