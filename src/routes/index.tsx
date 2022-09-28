/* eslint-disable import/extensions */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "../components/Header";
import { AboutMe } from "../pages/AbouteMe";
import { ContactMe } from "../pages/ContactMe";
import { Home } from "../pages/Home";
import { MyProjects } from "../pages/MyProjects";

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>
  );
}
