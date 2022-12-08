import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navigation/Navbar";
import { useLocation } from "react-router-dom";

function Home() {
  const { pathname } = useLocation();
  return (
    <div>
      <Navbar />
      {pathname === "/" && (
        <div>
          <h1>This is home page</h1>
        </div>
      )}
      <Outlet />
    </div>
  );
}

export default Home;
