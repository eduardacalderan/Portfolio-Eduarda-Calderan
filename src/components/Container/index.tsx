// src\components\Container\index.tsx
/* eslint-disable import/extensions */
import React from "react";

import { MyRoutes } from "../../routes";
import Footer from "../Footer";
import { Content } from "./style";

function Container() {
  return (
    <Content>
      <MyRoutes />
      <Footer />
    </Content>
  );
}

export default Container;
