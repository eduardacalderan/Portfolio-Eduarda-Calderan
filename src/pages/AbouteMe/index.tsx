// src\pages\AbouteMe\index.tsx
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
              * I have 3 years of experience in Web Development
              <br />
              * and Robotic Process Automation (RPA).
              <br />
              * Expertise in automating processes and data analysis,
              <br />
              * integrating different systems and platforms to communicate
              efficiently,
              <br />
              * easing the flow of information between departments,
              <br />
              * increasing process efficiency,
              <br />
              * ensuring greater accuracy in data and operations,
              <br />
              * and enhancing the customer experience.
              <br />
              * Proficient in process mapping,
              <br />
              * able to break down each step into its most basic parts,
              <br />
              * tracking the movement of each element
              <br /> * and clearly outlining the logical flow of
              decision-making.
              <br />
              * Skilled in communication,
              <br />
              * enabling me to interview employees in the business sector,
              <br />
              * ensuring a precise understanding of the activities performed
              <br />* and the scope of business processes.
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
