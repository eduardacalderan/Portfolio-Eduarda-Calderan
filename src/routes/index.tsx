/* eslint-disable import/extensions */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AboutMe } from "../components/AbouteMe";
import { ContactMe } from "../components/ContactMe";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { MyProjects } from "../components/MyProjects";

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
