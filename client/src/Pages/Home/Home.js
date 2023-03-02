import React, { useContext } from "react";
import "../../scss/_h1-hero.scss";
import "../../scss/_common.scss";
import { useNavigate, Outlet } from "react-router-dom";
import Navbar from "../../Components/Navigation/Navbar";
import { useLocation } from "react-router-dom";
import Categories from "./Categories";
import Footer from "../Footer/Footer";
import RecentJobs from "./RecentJobs";
import ApplyProcess from "./ApplyProcess";
import { useFormik } from "formik";
import Testimonial from "./Testimonials/Testimonial";

function Home(props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      jobTitle: "",
      jobLocation: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        resetForm({ values: "" });
        navigate(
          `/search_jobs/job_listings?jobTitle=${values.jobTitle}&jobLocation=${values.jobLocation}`
        );
      } catch (e) {
        throw new Error(e);
      }
    },
  });

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
                      <form
                        className="search-box"
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="input-form">
                          <input
                            type="text"
                            name="jobTitle"
                            placeholder="Job Tittle or Keyword"
                            value={formik.values.jobTitle}
                            onChange={formik.handleChange}
                          />
                        </div>
                        <div className="select-form">
                          <div className="input-form w-100">
                            <input
                              type="text"
                              name="jobLocation"
                              placeholder="Location (eg. district name)"
                              value={formik.values.jobLocation}
                              onChange={formik.handleChange}
                            />
                          </div>
                        </div>
                        <div className="search-form">
                          <button
                            type="submit"
                            className="btn head-btn1 w-100"
                            style={{ padding: "2.2rem" }}
                          >
                            Find Job
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Categories />
          <RecentJobs />
          <ApplyProcess />
          <Testimonial />
        </>
      )}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Home;
