import { Container, Content } from "./style";

export function Header() {
  return (
    <>
      <Container>
        <Content>
          <div className="person-and-nav">
            <p className="person">eduarda-calderan</p>
            <nav>
              <a href="">_hello</a>
              <a href="">_about-me</a>
              <a href="">_projects</a>
            </nav>
          </div>

          <div className="contact-me">
            <a href="" className="contact-me">
              _contact-me
            </a>
          </div>
        </Content>
      </Container>
    </>
  );
}
