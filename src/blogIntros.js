/** @jsx jsx */
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { jsx } from "theme-ui";
import { Link } from "gatsby";

export default () => (
    <StaticQuery
        query={graphql`
      query {
        posts: allPost(
            sort: {
                fields: [importance, date],
                order: DESC
            }
            limit: 6
            filter: {
                draft: { ne: true }
            }
            ) {
            edges {
                node {
                id
                slug
                title
                }
            }
        }
    }
    `}
        render={data => {
            // debugger
            let projects = data.posts.edges;
            return (
                <div
                    sx={{
                        marginLeft: '20px',
                        color: 'cardBg'
                    }}
                >
                    {projects.map((item, key) => {
                        return (
                            <Link to={item.node.slug} key={key}>
                                <h4>{item.node.title}</h4>
                            </Link>
                        )
                    })}
                </div>
            );
        }}
    />
);