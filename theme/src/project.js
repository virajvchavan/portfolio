/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";
import { useColorMode } from "theme-ui";

export default ({ title, date, draft, children, location, ...props }) => {
    const [colorMode, setColorMode] = useColorMode();
    return (
      <div
        sx={{
          maxWidth: "container"
        }}
      >
        <ul
          sx={{
            listStyleType: "none",
            display: "inline-block",
            fontSize: "14px",
            padding: 0
          }}
        >
          {props.allProjects.map(project => (
            <Link
              key={project.title}
              to={project.slug}
              className={
                colorMode === "light"
                  ? "projectLink"
                  : "projectLink darkmode"
              }
              activeClassName={
                colorMode === "light"
                  ? "projectLinkActive"
                  : "projectLinkActive darkmode"
              }
            >
              <li>{project.title}</li>
            </Link>
          ))}
        </ul>
        <hr sx={{ margin: 0 }} />
        <article>
          <Styled.h3 sx={{ marginTop: "12px" }}>{title}</Styled.h3>
          {children}
        </article>
      </div>
    );
}
