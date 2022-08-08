import { NavLink } from "react-router-dom";

import { Container, Content } from "./style";

export function Header() {
  return (
    <>
      <Container>
        <Content>
          <div className="person-and-nav">
            <p className="person">eduarda-calderan</p>
            <nav>
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "white",
                        borderBottom: "2px solid var(--orange)",
                      }
                    : { color: "#B8B8B8", borderBottom: "0px" }
                }
              >
                _hello
              </NavLink>
              <NavLink
                to="about-me"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "white",
                        borderBottom: "2px solid var(--orange)",
                      }
                    : { color: "#B8B8B8", borderBottom: "0px" }
                }
              >
                _about-me
              </NavLink>
              <NavLink
                to="projects"
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: "white",
                        borderBottom: "2px solid var(--orange)",
                      }
                    : { color: "#B8B8B8", borderBottom: "0px" }
                }
              >
                _projects
              </NavLink>
            </nav>
          </div>

          <div className="contact-me">
            <NavLink
              to="contact-me"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "white",
                      borderBottom: "2px solid var(--orange)",
                    }
                  : { color: "#B8B8B8", borderBottom: "0px" }
              }
            >
              _contact-me
            </NavLink>
          </div>
        </Content>
      </Container>
    </>
  );
}
