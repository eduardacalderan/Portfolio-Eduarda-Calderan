import { Container, Content } from "./style";

export function Header() {
  return (
    <>
      <Container>
        <Content>
          <p className="person">eduarda-calderan</p>
          <nav>
            <a href="">_hello</a>
            <a href="">_about-me</a>
            <a href="">_projects</a>
          </nav>
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
