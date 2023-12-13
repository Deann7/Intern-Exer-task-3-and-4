import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import AboutMe from "../Pages/AboutMe";
import ContactMe from "../Pages/ContactMe";

const NavLink = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={ <Home/>} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavLink;