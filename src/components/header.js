import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li className="linkList" style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
 
    <header style={{ marginBottom: `1.5rem` }}>
      
        <h1 className="layoutHeader"style={{ display: `inline` }}>Projects from V School</h1>
     
      <ul style={{ listStyle: `none` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/projects/">Projects</ListLink>
        <ListLink to="/newprojects/">Add New Project</ListLink>
      </ul>
    </header>
)
