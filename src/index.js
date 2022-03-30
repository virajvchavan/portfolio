import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash.get'
import Layout from './layout'

const Page = props => {
  let title = 'Viraj Chavan | Full Stack Software Engineer with Product Mindset'
  const postTitle = get(props.data, 'post.title')
  let description = get(props.data, 'post.excerpt')
  let image_url = get(props.data, 'post.image_url')
  const avatar = 'https://virajc.tech/avatar.png'

  if (postTitle) {
    title = `${postTitle} | ${title}`
  }

  if(image_url) {
    image_url = 'https://virajc.tech' + image_url;
  } else {
    image_url = avatar;
  }

  if(!description) {
    description = "A full-stack software engineer with around 3 years of experience. Skilled in NodeJs, Ruby on Rails, ReactJs, TypeScript, MySQL, MongoDB and more. I love building and shipping things people will actually use and enjoy thinking about the user and their perspective as well as the technical solution."
  }

  return (
    <>
      <Helmet>
        <link rel="canonical" href={props.location.href} />
        <link
          rel="icon"
          type="image/png"
          href={avatar}
        />
        <link
          rel="apple-touch-icon-precomposed"
          href={avatar}
        />
        <meta name="twitter:site" content="@viraVChavan" />
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={image_url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="Viraj Chavan" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <Layout {...props}>{props.children}</Layout>
    </>
  );
}

export const wrapPageElement = ({ element, props }) =>
  <Page {...props}>
    {element}
  </Page>
