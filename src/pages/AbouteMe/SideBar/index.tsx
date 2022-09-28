import { AiFillCode } from "react-icons/ai";
import { RiGamepadFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

import { Content } from "./style";

export function SideBar() {
  return (
    <>
      <Content>
        <NavLink
          to=""
          style={({ isActive }) =>
            isActive
              ? {
                  color: "white",
                }
              : { color: "#B8B8B8" }
          }
        >
          <AiFillCode />
        </NavLink>
        <NavLink
          to="/contact-me"
          style={({ isActive }) =>
            isActive
              ? {
                  color: "white",
                }
              : { color: "#B8B8B8" }
          }
        >
          <RiGamepadFill />
        </NavLink>
      </Content>
    </>
  );
}
