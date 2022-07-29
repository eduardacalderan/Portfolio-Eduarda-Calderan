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
            <i>
              <FaLinkedinIn />
            </i>
            <i>
              <BsInstagram />
            </i>
          </div>
          <div className="my-github">
            <i>
              <p>@eduardacalderan</p>
              <BsGithub />
            </i>
          </div>
        </Content>
      </Container>
    </>
  );
}
