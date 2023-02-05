import React from "react";
import "./App.css";
import OurTeam from "./Pages/Team/OurTeam";
import Dashboard from "./Pages/Admin/Dashboard";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/SignUp/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
          <Route path="services" element={<p>This is services page</p>} />
          <Route path="login/:mode" element={<Login />} />
          <Route path="register/:mode" element={<Register />} />
        </Route>
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route path="dashboard" element={<p>This is dashboard</p>} />
          <Route path="company" element={<p>This is company</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
