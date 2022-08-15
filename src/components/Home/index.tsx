import Me from "../../assets/me.png";
import myavatar1 from "../../assets/myavatar1.png";
import { Content } from "./style";

export function Home() {
  return (
    <>
      <Content>
        <div className="presentation">
          <p className="hi">Hi all. I am</p>
          <h1>
            Eduarda Calderan{" "}
            <span className="tilte"> &gt; Full-stack developer</span>
          </h1>
          <p>// find my profile on Github:</p>

          <p className="my-github">
            <span>const</span> myGitHub <span className="equal"> = </span>
            <a href="https://github.com/eduardacalderan" target="_blank">
              https://github.com/eduardacalderan
            </a>
          </p>
        </div>
        <div className="my-avatar">
          {" "}
          <div className="green"></div>
          <div className="blue"></div>
          <img src={Me} alt="" />
        </div>
      </Content>
    </>
  );
}
