import React, { useState } from "react";
import "./App.css";
import LandingPage from "./Pages/Landing Page/landingPage";
import About from "./Pages/Landing Page/about";
import Home from "./Pages/Landing Page/Home";
import Preloader from "./Components/Preloader/Preloader";
import { Route, Routes } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 7700);
  return (
    <div className="app">
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
