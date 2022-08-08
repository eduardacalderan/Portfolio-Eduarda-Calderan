/* eslint-disable import/extensions */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "../components/Header";
import { Home } from "../components/Home";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
