---
title: 'Personal blog'
url: 'https://virajc.tech'
index: 4
description: "Personal portfolio and a place to publish blogs. Built in GatsbyJs, React. (This website!)"
start_date: "2019-02-25"
end_date: ""
tags: ['reacts', 'gatsby', 'nodejs', 'javascript', 'html', 'css']
---

### Personal blog (This website)

<a href="https://github.com/virajvchavan/portfolio" class="project_linkouts" target='_blank'>Github</a>

I always wanted to have a nice & clean portfolio website to share my work and thoughts.

I was looking for some inspiration, and stumbled upon <a href="https://jxnblk.com" target="_blank">jxnblk.com</a>. The look and feel of the site was just what I wanted, and I didn't want to spend time writing styles wanted to focus on the content instead. So I decided to use its open source <a href="https://github.com/jxnblk/blog" target="_blank">codebase</a> as a starter repo for my own site.

This project used <a href="https://www.gatsbyjs.org" target="_blank">Gatsby JS</a>. I had no idea what Gatsby is.

> Gatsby is a framework based on React that helps developers build blazing fast websites and apps.

But wait, isn't React already a framework for building websites and apps? Why do we need something on top React? What does it mean by fast websites?

I had to find the answers. So I spent some hours learning what Gatsby is and when to use it.

Gatsby can be considered a replacement for <a href="" target="_blank">create-react-app</a>, but it does a lot more.

A traditional SPA is one large bundle of javascript that's loaded in your browser. That javascript then handles everything from rendering pages, dealing with state, handling routes and a lot more. All of this can take a toll on initial page loading times, and importantly SEO.

What Gatsby does is, it uses powerful pre-configuration to build only static files for faster page load times. It gives extra benefits such as code-splitting, optimized image loading, data pre-fetching and asset optimization. Even though Gatsby generates static files, Gatsby apps <a href="https://www.gatsbyjs.org/docs/react-hydration/" target="_blank">rehydrate</a> from static HTML rendered by ReactDOM APIs into an app running client-side JavaScript.

It also has a large ecosystem of <a href="https://www.gatsbyjs.org/plugins/" target="_blank">plugins</a> and themes you can use to speed-up your development.
I used the `gatsby-plugin-mdx` plugin to write blogs in markdown and create HTML pages from it a build time. Also used `gatsby-plugin-theme-ui` to help manage the styles that support multiple color modes. (Try clicking the button at the top-right corner.)

Gatsby also uses <a href="https://graphql.org/" target="_blank">GraphQL</a>, something I had only heard of. I ended up reading all about it, and experimented with it for quiet some time.

(I will probably write a separate blog to explain Gatsby in detail).
