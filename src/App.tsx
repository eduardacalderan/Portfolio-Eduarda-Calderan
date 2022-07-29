/* eslint-disable import/extensions */
import React from "react";

import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
