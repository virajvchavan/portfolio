import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Project from "../project";

export default props => {
  const { project } = props.data;
  const children = <MDXRenderer children={project.body} />;

  return <Project {...props} {...project} children={children} allProjects={props.data.allProject.nodes} />;
};

export const query = graphql`
         query($id: String!) {
           project(id: { eq: $id }) {
             id
             start_date(formatString: "MMMM DD, YYYY")
             end_date(formatString: "MMMM DD, YYYY")
             title
             body
             tags
             url
           }
           allProject(sort: { fields: [index, title], order: ASC }) {
             nodes {
               title
               slug
             }
           }
         }
       `;  
