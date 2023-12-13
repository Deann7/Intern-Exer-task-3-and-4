import React from "react";
import "./App.css";
import Navlink from "./Components/Navlink";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";




function App() {
  return (
    <BrowserRouter>
      <Navlink/>
      <Navbar/>

      </BrowserRouter>
  );
}

export default App;