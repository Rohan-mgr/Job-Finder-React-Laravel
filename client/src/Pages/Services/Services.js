import React, { useEffect } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BiTime } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { SlDiamond } from "react-icons/sl";
import { IoNotificationsSharp } from "react-icons/io5";
import { FaFreeCodeCamp } from "react-icons/fa";
import "../../scss/_services-page.scss";
import "../../Pages/ContactUs/ContactUs.css";

function Services() {
  useEffect(() => {
    document.title = "Jobfinder.com | Services";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="breadCrum">
        <h2>Services</h2>
        <h4>Take your career to the next level</h4>
      </div>

      <div className="container mx-auto">
        <div className="row">
          <div className="service">
            <div className="circle">
              <div className="icon">
                <AiOutlineFileSearch />
              </div>
            </div>
            <div className="text">
              <h5>Easy for search</h5>
              <p>
                We consider search to be one of the most important feature for
                Job seekers and Employers. Therefore, we have implemented the
                search algorithms to find a job or a candidate for a job.
              </p>
            </div>
          </div>

          <div className="service">
            <div className="circle">
              <div className="icon">
                <BiTime />
              </div>
            </div>
            <div className="text">
              <h5>Jobseekers can apply for IT and Non-IT Jobs</h5>
              <p>
                Jobseekers can apply for IT and Non-IT jobs to make sure that
                right job reaches the right person. This feature makes it easy
                to navigate through the jobs by creating a distinctive space for
                both fields.
              </p>
            </div>
          </div>
          <div className="service">
            <div className="circle">
              <div className="icon">
                <BsFillPersonFill />
              </div>
            </div>
            <div className="text">
              <h5>Easy Registration & CV Creation</h5>
              <p>
                We have an easy registration section which allows you to
                directly sign-up to our network.
              </p>
            </div>
          </div>
          <div className="service">
            <div className="circle">
              <div className="icon">
                <SlDiamond />
              </div>
            </div>
            <div className="text">
              <h5>Refer from JobFinder</h5>
              <p>
                Due to the intense competition in the job market, sometimes even
                a deserving candidate might have to struggle to find a job.
                JobAxle organizes aptitude tests for candidates and refers them
                to organizations on the merit basis.
              </p>
            </div>
          </div>
          <div className="service">
            <div className="circle">
              <div className="icon">
                <IoNotificationsSharp />
              </div>
            </div>
            <div className="text">
              <h5>Notification</h5>
              <p>
                When jobseekers apply for jobs then employers will get the
                notification and he or she can view the jobseekers details.
              </p>
            </div>
          </div>
          <div className="service">
            <div className="circle">
              <div className="icon">
                <FaFreeCodeCamp />
              </div>
            </div>
            <div className="text">
              <h5>Intern/Freelancing</h5>
              <p>
                We have introduced a separate section for Freelancing or
                Internship to accommodate to the need of the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
