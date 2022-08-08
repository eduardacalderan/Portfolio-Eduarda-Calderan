/* eslint-disable import/extensions */
import React from "react";

import Footer from "./components/Footer";
import { MyRoutes } from "./routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <MyRoutes />
      <GlobalStyle />
      <Footer />
    </div>
  );
}

export default App;
