import myAvatar1 from "../../assets/myAvatar1.png";
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
          <p>//description</p>
          <p>//description</p>
          <p className="my-github">
            <span>const</span> myGitHub <span className="equal"> = </span>
            <a href="https://github.com/eduardacalderan">
              https://github.com/eduardacalderan
            </a>
          </p>
        </div>
        <div className="sla">
          {" "}
          <div className="green"></div>
          <div className="blue"></div>
          <img src={myAvatar1} alt="" />
        </div>
      </Content>
    </>
  );
}
