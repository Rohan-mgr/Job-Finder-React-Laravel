import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navigation/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

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
      <Footer />
    </div>
  );
}

export default Home;
