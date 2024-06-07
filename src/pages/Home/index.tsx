import Me from "../../assets/me.png";
import { Content } from "./style";

export function Home() {
  return (
    <>
      <Content>
        <div className="presentation">
          <p className="hi">Hi all. I am</p>
          <h1>
            Eduarda Calderan
            <span className="tilte"> &gt; Software developer</span>
          </h1>
          <p>//play some games developed by me:</p>

          <p className="my-github">
            <span>const</span> myGitHub <span className="equal"> = </span>
            <a
              href="https://github.com/eduardacalderan/my-games"
              target="_blank"
            >
              https://github.com/eduardacalderan/my-games
            </a>
          </p>
        </div>
        <div className="my-avatar">
          <div className="green"></div>
          <div className="blue"></div>
          <img src={Me} alt="" />
        </div>
      </Content>
    </>
  );
}
