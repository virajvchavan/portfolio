/** @jsx jsx */
// dumb components with styles used in the mdx files
import { jsx } from 'theme-ui'
import {
  FaTwitter as Twitter,
  FaGithub as GitHub,
  FaLinkedin as Linkedin
} from 'react-icons/fa'
import { Link } from "gatsby";


export const Banner = props =>
  <div
    sx={{
      py: [4, 5, 6],
      fontWeight: 'bold',
      h1: {
        fontSize: [6, 7],
        marginTop: '0px'
      },
      p: {
      },
      ul: {
        listStyle: 'none',
        display: 'flex',
        p: 0,
        m: 0,
      },
      li: {
        mr: 3,
      },
      a: {
        variant: 'styles.navlink',
      }
    }}>
    {props.children}
  </div>

export const Container = ({ wide, ...props }) =>
  <div
    sx={{
      maxWidth: wide ? 'wide' : 'container',
    }}>
    {props.children}
  </div>

export const Tiles = props =>
  <div
    sx={{
      ul: {
        listStyle: 'none',
        p: 0,
        m: 0,
        display: 'grid',
        gridGap: 4,
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
      },
      h2: {
        fontSize: 2,
      },
      img: {
        display: 'block',
        width: 128,
        maxWidth: '100%',
        height: 'auto',
        m: 'auto',
      },
      a: {
        variant: 'styles.navlink',
      },
      ...props.sx
    }}>
    {props.children}
  </div>

export const List = props =>
  <div
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: 4,
      },
      a: {
        variant: 'styles.navlink',
        fontWeight: 'bold',
      },
      ...props.sx
    }}>
    {props.children}
  </div>

export const Skill = props =>
  <div
    sx={{
      color: 'background',
      backgroundColor: 'cardBg',
      padding: '3px',
      margin: '0 6px 6px 0',
      borderRadius: '4px',
      fontSize: '15px',
      width: 'fit-content',
      display: 'inline-block',
      ...props.sx
    }}>
      {props.children}
  </div>

export const SimpleLink = props =>
  <span
    sx={{
      fontSize: '15px',
      background: 'none',
      // color: '#008eff',
      color: 'link',
      textDecoration: 'underline',
      cursor: 'pointer',
      ...props.sx
      }}
      onClick={props.onClick}
      role='menuitem'
      tabIndex='0'>
      {props.children}
  </span >

export const SocialLinks = props =>
  <div
    sx={{
      py: 4,
      display: 'flex',
      justifyContent: 'center',
    }}>
    <a
      href='https://twitter.com/virajVChavan'
      title='Twitter'
      target='_blank'
      rel="noopener noreferrer"
      sx={{
        variant: 'styles.navitem',
        mx: 2,
      }}>
      <Twitter size={24} />
    </a>
    <a
      href='https://github.com/virajvchavan'
      title='GitHub'
      target='_blank'
      rel="noopener noreferrer"
      sx={{
        variant: 'styles.navitem',
        mx: 2
      }}>
      <GitHub size={24} />
    </a>
    <a
      href='https://www.linkedin.com/in/virajvchavan/'
      title='Linkedin'
      target='_blank'
      rel="noopener noreferrer"
      sx={{
        variant: 'styles.navitem',
        mx: 2
      }}>
      <Linkedin size={24} />
    </a>
  </div>

export const Project = props => (
         <Link
           sx={{
             width: [
               "calc(100% - 16px)",
               "calc(80% - 16px)",
               "calc(50% - 16px)",
               "calc(33.3% - 16px)"
             ],
             margin: "8px",
             minWidth: "340px",
             maxWidth: "450px",
             textDecoration: "none"
           }}
           to={props.data.slug}
         >
           <div
             className="projectCard"
             sx={{
               display: "block",
               borderRadius: "3px",
               color: "background",
               backgroundColor: "cardBg",
               boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 8px 0px;",
               padding: "15px",
               ":hover": {
                 boxShadow: "rgba(0, 0, 0, 0.21) 0px 6px 16px 0px;"
               },
               minHeight: "144px",
               cursor: "pointer",
               ...props.sx
             }}
           >
             <div className="title" sx={{ fontWeight: "bold" }}>
               {props.data.title}
               <span
                 sx={{
                   float: "right",
                   marginTop: "-12px",
                   marginRight: "-7px",
                   fontSize: "15px"
                 }}
               >
                 &#8599;
               </span>
             </div>
             <div
               sx={{
                 marginTop: "10px",
                 fontSize: "14px",
                 color: "cardText",
                 fontWeight: 500
               }}
             >
               {props.data.description}
             </div>
           </div>
         </Link>
       );