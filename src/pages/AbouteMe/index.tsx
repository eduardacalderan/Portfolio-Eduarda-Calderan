/* eslint-disable import/extensions */
import { MyInfosSideBar } from "./MyInfosSideBar";
import { SideBar } from "./SideBar";
import { Content } from "./style";

export function AboutMe() {
  return (
    <>
      <Content>
        {/* <div className="sidebar">
          <div className="icons">i</div>
          <div className="menu">
            <p>sidebar</p>
          </div>
        </div> */}
        <SideBar />
        <MyInfosSideBar />
        <div className="personal-info">
          <p>my-infos</p>
          <div className="grid">
            {" "}
            <p>
              1 <br />
              2 <br />
              3 <br />
              4 <br />
              5 <br />
              6 <br />
              7 <br />
              8 <br />
              9 <br />
              10 <br />
              11 <br />
              12 <br />
              13 <br />
              14 <br />
              15 <br />
              16
            </p>
            <p>
              /**
              <br />
              * About me
              <br />
              * I have 3 years of еxperience in web
              <br />
              * and Robotic Process Automation (RPA),
              <br />
              * consectetur adipiscing elit, sed do eiusmod
              <br />
              * tempor incididunt ut labore et dolore
              <br />
              * magna aliqua. Ut enim ad minim veniam,
              <br />
              * quis nostrud exercitation ullamco laboris
              <br />
              * nisi ut aliquip ex ea commodo consequat.
              <br />
              * Duis aute irure dolor in reprehenderit in
              <br />
              * <br />
              * Duis aute irure dolor in reprehenderit in
              <br />
              * voluptate velit esse cillum dolore eu fugiat
              <br />
              * nulla pariatur. Excepteur sint occaecat
              <br />
              * officia deserunt mollit anim id est laborum.
              <br />
              */
            </p>
          </div>
        </div>

        <div>
          <p>sidebar</p>
        </div>
      </Content>
    </>
  );
}
