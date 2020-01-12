module.exports = {
  siteMetadata: {
    title: "Viraj C | Software Engineer",
    description: "Viraj Chavan",
    siteUrl: "https://virajc.tech"
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-theme-jxnblk",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Roboto Mono"]
      }
    },
    "gatsby-plugin-twitter",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-155023343-1"
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: [{ regex: "^/blog" }],
        height: 3,
        prependToBody: false,
        color: `#777`
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `virajc`
      }
    }
  ]
};
