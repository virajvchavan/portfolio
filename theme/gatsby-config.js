const pkg = require('./package.json')

module.exports = {
  siteMetadata: {
    title: 'Viraj Chavan1',
    description: 'Blog',
    siteUrl: 'https://virajvc.tech',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: [ '.mdx', '.md' ],
      }
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: 'src/posts',
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: require('./feed')
    },
  ]
}
