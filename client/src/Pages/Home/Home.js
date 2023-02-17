import React from "react";
import "../../scss/_h1-hero.scss";
import "../../scss/_common.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navigation/Navbar";
import { useLocation } from "react-router-dom";
import Categories from "./Categories";
import Footer from "../Footer/Footer";

function Home() {
  const { pathname } = useLocation();
  return (
    <div>
      <Navbar />
      {pathname === "/" && (
        <>
          <div className="slider-area">
            {/* Mobile Menu */}
            <div className="slider-active">
              <div className="single-slider slider-height d-flex align-items-center">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-6 col-lg-9 col-md-10">
                      <div className="hero__caption">
                        <h1>Find the most exciting startup jobs</h1>
                      </div>
                    </div>
                  </div>
                  {/* Search Box */}
                  <div className="row">
                    <div className="col-xl-8">
                      {/* form */}
                      <form action="#" className="search-box">
                        <div className="input-form">
                          <input
                            type="text"
                            placeholder="Job Tittle or keyword"
                          />
                        </div>
                        <div className="select-form">
                          <div className="select-itms nice-select">
                            <select name="select" id="select1">
                              <option value>Location BD</option>
                              <option value>Location PK</option>
                              <option value>Location US</option>
                              <option value>Location UK</option>
                            </select>
                          </div>
                        </div>
                        <div className="search-form">
                          <a href="#">Find job</a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Categories />
        </>
      )}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
