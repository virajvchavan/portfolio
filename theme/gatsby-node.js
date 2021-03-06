const fs = require(`fs`)
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const get = require('lodash.get')

const join = (...args) => args.filter(Boolean).join('/')

const mdxResolverPassthrough = fieldName => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`)
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  })
  const resolver = type.getFields()[fieldName].resolve
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  })
  return result
}

const resolveTitle = async (...args) => {
  const headings = await mdxResolverPassthrough('headings')(...args)
  return get(headings, '0.value', '')
}

exports.sourceNodes = ({ actions, schema }) => {
  actions.createTypes(
    schema.buildObjectType({
      name: 'Post',
      fields: {
        id: { type: 'ID!' },
        title: {
          type: 'String!',
        },
        slug: {
          type: 'String!',
        },
        date: {
          type: 'Date',
          extensions: { dateformat: {} }
        },
        importance: {
          type: 'Int'
        },
        draft: {
          type: 'Boolean',
        },
        tags: {
          type: '[String]!',
        },
        excerpt: {
          type: 'String!',
          args: {
            pruneLength: {
              type: `Int`,
              defaultValue: 156,
            },
          },
          resolve: mdxResolverPassthrough('excerpt'),
        },
        body: {
          type: 'String!',
          resolve: mdxResolverPassthrough('body'),
        },
        html: {
          type: 'String!',
          resolve: mdxResolverPassthrough('html'),
        },
        image_url: {
          type: 'String!',
        }
      },
      interfaces: ['Node'],
    })
  )

  actions.createTypes(
    schema.buildObjectType({
      name: 'Project',
      fields: {
        id: { type: 'ID!' },
        title: {
          type: 'String!',
        },
        slug: {
          type: 'String!',
        },
        url: {
          type: 'String!',
        },
        start_date: {
          type: 'Date',
          extensions: { dateformat: {} }
        },
        end_date: {
          type: 'Date',
          extensions: { dateformat: {} }
        },
        index: {
          type: 'Int'
        },
        tags: {
          type: '[String]!',
        },
        description: {
          type: 'String!',
        },
        body: {
          type: 'String!',
          resolve: mdxResolverPassthrough('body'),
        },
        html: {
          type: 'String!',
          resolve: mdxResolverPassthrough('html'),
        }
      },
      interfaces: ['Node'],
    })
  )
}

exports.onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  if (node.internal.type !== `Mdx`) return

  const parent = getNode(node.parent)
  const child = getNode(node.id)
  if (parent.sourceInstanceName === 'posts') {
    const slug = '/blog' + createFilePath({
      node,
      getNode,
    })

    const title = get(node, 'headings[1].value',
      get(node, 'frontmatter.title', '')
    )
    const date = get(node, 'frontmatter.date')
    const draft = get(node, 'frontmatter.draft', false)
    const tags = get(node, 'frontmatter.tags', [])
    const importance = get(node, 'frontmatter.importance', 5)
    const image_url = get(node, 'frontmatter.image_url', '')

    actions.createNode({
      slug,
      title,
      date,
      draft,
      importance,
      tags,
      image_url,
      id: createNodeId(`${node.id} >>> Post`),
      parent: node.id,
      children: [],
      internal: {
        type: `Post`,
        contentDigest: createContentDigest({
          slug,
          date,
          body: node.rawBody,
        }),
        content: node.rawBody,
        description: `Blog Posts`,
      },
    })

    actions.createParentChildLink({ parent, child })
  } else if (parent.sourceInstanceName === 'projects') {
    const slug = '/project' + createFilePath({
      node,
      getNode,
    })

    const title = get(node, 'frontmatter.title', '')
    const start_date = get(node, 'frontmatter.start_date', '')
    const end_date = get(node, 'frontmatter.end_date', '')
    const tags = get(node, 'frontmatter.tags', [])
    const index = get(node, 'frontmatter.index', 100)
    const description = get(node, 'frontmatter.description', '')
    const url = get(node, 'frontmatter.url', '#')

    actions.createNode({
      slug,
      title,
      start_date,
      end_date,
      index,
      tags,
      description,
      url,
      id: createNodeId(`${node.id} >>> Project`),
      parent: node.id,
      children: [],
      internal: {
        type: `Project`,
        contentDigest: createContentDigest({
          slug,
          body: node.rawBody,
        }),
        content: node.rawBody,
        description: `Projects`,
      },
    })

    actions.createParentChildLink({ parent, child })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    {
      allPost(
        sort: {
          fields: [importance, date, title],
          order: DESC
        }
        limit: 1000
      ) {
        edges {
          node {
            id
            slug
            title
            date
          }
        }
      }
    }
  `)

  if (result.errors) reporter.panic(result.errors)

  const filtered = await graphql(`
    {
      allPost(
        sort: {
          fields: [importance, date, title],
          order: DESC
        }
        filter: {
          draft: { ne: true }
        }
        limit: 1000
      ) {
        edges {
          node {
            id
            slug
            title
            date
          }
        }
      }
    }
  `)

  if (filtered.errors) reporter.panic(filtered.errors)

  const posts = result.data.allPost.edges.map(e => e.node)
  const list = result.data.allPost.edges.map(e => e.node)

  // create page for each post
  posts.forEach(post => {
    actions.createPage({
      path: post.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        id: post.id,
      },
    })
  })

  const limit = 16
  const pages = Math.ceil(list.length / limit)

  // create index of all blog posts
  Array.from({ length: pages }).forEach((n, i) => {
    const pi = i
    const ni = i + 2
    let previous = ''
    let next = ''
    if (i > 0) {
      previous = pi === 1 ? '/blog' : join('/blog', pi)
    }
    if (ni < pages) {
      next = join('/blog', ni)
    }
    const slug = i === 0 ? '/blog' : join('/blog', i + 1)

    actions.createPage({
      path: slug,
      component: require.resolve('./src/templates/posts.js'),
      context: {
        previous,
        next,
        limit,
        skip: i * limit,
      }
    })
  })

  const projectsQuery = await graphql(`
    {
      allProject(
        sort: { fields: [index, title], order: ASC }
        limit: 1000
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (projectsQuery.errors) reporter.panic(projectsQuery.errors);

  const projects = projectsQuery.data.allProject.edges.map(e => e.node);

  projects.forEach(project => {
    actions.createPage({
      path: project.slug,
      component: require.resolve("./src/templates/project.js"),
      context: {
        id: project.id
      }
    });
  });

}

