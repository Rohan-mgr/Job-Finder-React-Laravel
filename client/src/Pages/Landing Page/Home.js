import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function Home() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default Home;
