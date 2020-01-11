/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'

export default ({
  posts,
  previous,
  next,
  ...props
}) =>
  <div
    sx={{
      maxWidth: '780px',
    }}>
    <ul
      sx={{
        listStyle: 'none',
        m: 0,
        p: 0,
      }}>
      {posts.map(post => (
        <li key={post.id} sx={{ marginBottom: '3px'}}>
          <Styled.h1 as='h2' sx={{marginBottom: '9px'}}>
            <Link
              to={post.slug}
              sx={{
                display: 'block',
                color: 'inherit',
                textDecoration: 'none',
                fontSize: '24px',
                ":hover": {
                  color: 'primary'
                }
              }}>
              {post.title || post.slug}
            </Link>
          </Styled.h1>
          <div sx={{ variant: 'type.small' }}>{post.date}</div>
          <Styled.p sx={{marginBlockStart: '0.6em', fontSize: '17px', lineHeight: '1.45'}}>
            {post.excerpt}
          </Styled.p>
        </li>
      ))}
    </ul>
    <div
      sx={{
        display: 'flex',
        alignItems: 'center',
        py: 4,
      }}>
      {previous && (
        <Link to={previous}
          sx={{
            variant: 'styles.navitem',
          }}>
          Previous
        </Link>
      )}
      <div sx={{ mx: 'auto' }} />
      {next && (
        <Link to={next}
          sx={{
            variant: 'styles.navitem',
          }}>
          Next
        </Link>
      )}
    </div>
  </div>
