/** @jsx jsx */
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Project } from "./blocks.js";
import { jsx } from "theme-ui";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        projects: allProjectsJson {
          edges {
            node {
              title
              url
              description
            }
          }
        }
      }
    `}
    render={data => {
      let projects = data.projects.edges.map(e => e.node);
      return (
        <div sx={{
          display: 'flex',
          flexFlow: 'wrap',
          maxWidth: '1068px'
        }}>
          {projects.map((item, key) => {
            return <Project data={item} key={item.title} />
          })}
        </div>
      )
    }}
  />
)