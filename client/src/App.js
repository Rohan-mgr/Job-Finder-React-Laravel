import React from "react";
import "./App.css";
import OurTeam from "./Pages/Team/OurTeam";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/ourteam" element={<OurTeam />} />
      </Routes>
    </div>
  );
}

export default App;
