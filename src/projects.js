import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        projects: allProjectsJson {
          edges {
            node {
              id
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
      return projects.map((item, key) => {
        return <div key={item.title}>{item.title}</div>
      });
    }}
  />
)