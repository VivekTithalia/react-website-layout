import React from "react";
import "./Index.css";
import Nav from "./Nav";
import Home from "./Home";
import Contact from "./Contact";
import User from "./User";
import About from "./About";

import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </>
  );
};

export default App;
