/** @jsx jsx */
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { Project } from "./blocks.js";
import { jsx } from "theme-ui";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        projects: allProject(sort: { fields: index }) {
          nodes {
            title
            url
            description
            slug
          }
        }
      }
    `}
    render={data => {
      let projects = data.projects.nodes;
      return (
        <div
          className='projectCards'
          sx={{
            display: "flex",
            flexFlow: "wrap",
            maxWidth: "1068px"
          }}
        >
          {projects.map((item, key) => {
            return <Project data={item} key={item.title} />;
          })}
        </div>
      );
    }}
  />
);