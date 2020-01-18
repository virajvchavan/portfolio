/** @jsx jsx */
import { jsx, Styled, useColorMode } from 'theme-ui'
import { Link } from 'gatsby'
import { Global } from '@emotion/core'
import "./layout.css"
import { SocialLinks } from './blocks'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

const modes = [
  'light',
  'black',
  // 'dark',
  // 'deep',
  // 'hack',
  // 'pink',
]

const ColorButton = ({
  mode,
  ...props
}) =>
  <button
    {...props}
    title='Cycle Color Mode'
    sx={{
      display: 'inline-block',
      appearance: 'none',
      bg: 'transparent',
      color: 'inherit',
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      ':hover,:focus': {
        color: 'primary',
        boxShadow: '0 0 0 3px',
        outline: 'none',
      }
    }}>
    <svg
      viewBox='0 0 32 32'
      width='24'
      height='24'
      fill='currentcolor'
      sx={{
        display: 'block',
      }}>
      <circle
        cx='16'
        cy='16'
        r='14'
        fill='none'
        stroke='currentcolor'
        strokeWidth='4'
      />
      <path
        d={`
          M 16 0
          A 16 16 0 0 0 16 32
          z
        `}
      />
    </svg>
  </button>

export default props => {
  const [mode, setMode] = useColorMode()
  const cycleMode = e => {
    const i = modes.indexOf(mode)
    const n = (i + 1) % modes.length
    setMode(modes[n])
    trackCustomEvent({ category: "colorModeBtn", action: "Click" });
  }

  return (
    <div
      sx={{
        variant: "styles.root",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
      className={mode === "light" ? "lightmode" : "darkmode"}
    >
      <Global
        styles={{
          "*": {
            boxSizing: "border-box"
          },
          body: {
            margin: 0
          }
        }}
      />
      <header
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          maxWidth: "wide",
          mx: "auto",
          px: 3,
          py: 4
        }}
      >
        <Styled.a
          as={Link}
          to="/"
          sx={{
            variant: "styles.navitem",
            mr: 3
          }}
          activeClassName="activeLink"
        >
          Viraj C
        </Styled.a>
        <Styled.a
          as={Link}
          to="/blog/"
          sx={{
            variant: "styles.navitem",
            mr: 3
          }}
          activeClassName="activeLink"
        >
          Blog
        </Styled.a>
        <Styled.a
          as={Link}
          to="/project/quickinsure/"
          sx={{
            variant: "styles.navitem",
            mr: 3
          }}
          activeClassName="activeLink"
        >
          Projects
        </Styled.a>
        <Styled.a
          as={Link}
          to="/about/"
          sx={{
            variant: "styles.navitem",
            mr: 3
          }}
          activeClassName="activeLink"
        >
          About
        </Styled.a>
        <div sx={{ mx: "auto" }} />
        <ColorButton mode={mode} onClick={cycleMode} />
      </header>
      <main
        sx={{
          width: "100%",
          maxWidth: "wide",
          px: 3,
          mx: "auto",
          flex: "1 1 auto"
        }}
      >
        {props.children}
      </main>
      <footer
        sx={{
          px: 3,
          py: 5,
          width: "100%",
          maxWidth: "wide",
          mx: "auto"
        }}
      >
        <SocialLinks />
        <div
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            fontSize: 0
          }}
        >
          <Styled.a
            as={Link}
            to="/"
            sx={{
              variant: "styles.navitem",
              mr: 3
            }}
          >
            Viraj C
          </Styled.a>
          <Styled.a
            as={Link}
            to="/blog/"
            sx={{
              variant: "styles.navitem",
              mr: 3
            }}
          >
            Blog
          </Styled.a>
          <Styled.a
            as={Link}
            to="/about/"
            sx={{
              variant: "styles.navitem",
              mr: 3
            }}
          >
            About
          </Styled.a>
          <Styled.a
            as={Link}
            to="/project/quickinsure/"
            sx={{
              variant: "styles.navitem",
              mr: 3
            }}
          >
            Projects
          </Styled.a>
          <Styled.a
            as={Link}
            to="/readings/"
            sx={{
              variant: "styles.navitem",
              mr: 4
            }}
          >
            Readings
          </Styled.a>
          <div sx={{ mx: "auto" }} />
          <div sx={{ my: 2 }}>
            Theme inspired from:{" "}
            <a
              className="activeLink"
              href="http://jxnblk.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              jxnblk.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
