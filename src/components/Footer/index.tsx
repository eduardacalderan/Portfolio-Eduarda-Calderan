import { BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import { Container, Content } from "./styles";

export default function Footer() {
  return (
    <>
      <Container>
        <Content>
          <p className="find-me">find me in:</p>
          <div className="find-me-icons">
            <a
              href="https://www.linkedin.com/in/eduarda-calderan-a02305215/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/eduardacalderan/"
              target="_blank"
            >
              <BsInstagram />
            </a>
          </div>
          <div className="my-github">
            <a href="https://github.com/eduardacalderan" target="_blank">
              <p>@eduardacalderan</p>
              <BsGithub />
            </a>
          </div>
        </Content>
      </Container>
    </>
  );
}
