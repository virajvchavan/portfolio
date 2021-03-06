/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import Tweet from '../tweet'
import { Disqus } from "gatsby-plugin-disqus";

const Draft = () => (
  <div
    sx={{
      p: 3,
      my: 4,
      fontWeight: 'bold',
      color: 'background',
      bg: 'accent',
    }}>
    <span role='img' aria-label="warning">⚠️</span> You are viewing an draft post, and this may not be ready for primetime.
  </div>
)

export default ({
  title,
  date,
  draft,
  children,
  location,
  ...props
}) => {
  let disqusConfig = {
    url: `${"https://virajc.tech" + location.pathname}`,
    identifier: title,
    title: title
  };
  return (
    <div
      sx={{
        maxWidth: "container"
      }}
    >
      <Styled.h1>{title}</Styled.h1>
      <div
        sx={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <div sx={{ variant: "type.small", mr: 3 }}>{date}</div>
        <Tweet text={title} url={location.href} />
      </div>
      {draft && <Draft />}
      <article>{children}</article>
      <div>
        <Tweet text={title} url={location.href} />
      </div>
      <div
        sx={{
          py: 5,
          fontWeight: "bold"
        }}
      >
        <Styled.a href="https://twitter.com/virajVChavan" target="_blank">
          Follow me on Twitter
        </Styled.a>{" "}
        for more great content like this.
      </div>
      <Disqus config={disqusConfig} />
    </div>
  );
}
