import React from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BiTime, BiCube } from "react-icons/bi";
import { BsFillPersonFill, BsFillSuitHeartFill, BsNewspaper } from "react-icons/bs";
import { FiMonitor, FiSave } from "react-icons/fi";
import { SlDiamond } from "react-icons/sl";
import { HiServerStack } from "react-icons/hi2";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoIosChatbubbles } from "react-icons/io";
import { FaFreeCodeCamp } from "react-icons/fa";
import "../../scss/_services-page.scss";
import "../../Pages/ContactUs/ContactUs.css"


function Services() {
  return (
    <div className="mb-5">
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
            <h5>Advanced algorithm for search</h5>
            <p>We consider search to be one of the most important feature for Job seekers and Employers. Therefore, we have implemented the most advanced search algorithms to find a job or a candidate for a job.</p>
          </div>
        </div>

        <div className="service">
          <div className="circle">
            <div className="icon">
              <BiTime />
            </div>
          </div>
          <div className="text">
            <h5>Separate sections for IT/Engineering and Non-IT Jobs</h5>
            <p>We have separate sections for IT/Engineering and Non-IT jobs to save time of the jobseekers and also to make sure that right job reaches the right person. This feature makes it easy to navigate through the jobs by creating a distinctive space for both fields.</p>
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
            <p>We have an easy registration section which allows you to directly sign-up to our network through Facebook or gmail. You can also create a very professional looking CV from our website.</p>
          </div>
        </div>
        <div className="service">
          <div className="circle">
            <div className="icon">
              <BiCube />
            </div>
          </div>
          <div className="text">
            <h5>Preference to find a right job</h5>
            <p>With JobFinder, you can setup preference for the kind of job you are looking for. This will automatically fill your dashboard with a list of your preferred jobs.</p>
          </div>
        </div>
        <div className="service">
          <div className="circle">
            <div className="icon">
              <FiMonitor />
            </div>
          </div>
          <div className="text">
            <h5>Workshop and training to enhance skills</h5>
            <p>JobFinder in collaboration with TechAxis hosts various training workshops to enhance the skills of individual and help them grab their dream job. We believe that people have a unique talent and trainings will help him or her amplify their talents. The Training section in our website helps you find trainings and seminars to enhance your skills and outgrow your dreams.</p>
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
            <p>Due to the intense competition in the job market, sometimes even a deserving candidate might have to struggle to find a job. JobFinder organizes aptitude tests for candidates and refers them to organizations on the merit basis.</p>
          </div>
        </div>
        <div className="service">
          <div className="circle">
            <div className="icon">
              <HiServerStack />
            </div>
          </div>
          <div className="text">
            <h5>Apply for confidential job</h5>
            <p>This special feature of JobFinder helps the employees who are willing to switch to a new job but do not want to look for jobs openly. Specially targeted for the senior level employees, we allow the candidates to confidentially submit their CV to us and let us find a better job for them. All the interviews are conducted within JobAxis premisis to maintain the confidentiality of the employees.</p>
          </div>
        </div>
        <div className="service">
          <div className="circle">
            <div className="icon">
              <IoNotificationsSharp />
            </div>
          </div>
          <div className="text">
            <h5>Alert & Notification</h5>
            <p>Jobseekers can setup their job preferences through our preference form. The JobFinder system will run the preferences data of each jobseeker and fill their dashboard with the jobs matching their profile.</p>
          </div>
        </div>
        <div className="service">
          <div className="circle">
            <div className="icon">
              <FiSave />
            </div>
          </div>
          <div className="text">
            <h5>Saved job</h5>
            <p>JobFinder allows you to save a job to your before immediately applying for the job. This feature saves you from the hassle of finding a job over again.</p>
          </div>
        </div>
        <div className="service">
          <div className="circle">
            <div className="icon">
              <BsFillSuitHeartFill />
            </div>
          </div>
          <div className="text">
            <h5>Favorite job</h5>
            <p>With JobFinder, you can select an organization that you would like to work with and you will receive notifications about the openings in that organization under the favorite job section</p>
          </div>
        </div>
        <div className="service">
          <div className="circle">
            <div className="icon">
              <IoIosChatbubbles />
            </div>
          </div>
          <div className="text">
            <h5>Chat/Email/call service</h5>
            <p>Our team at JobFinder, is always available via Chat/Email/call to instantly address the Jobseekers and Employers on their queries.</p>
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
            <p>We have introduced a separate section for Freelancing or Internship to accommodate to the need of the market.</p>
          </div>
        </div>
        <div className="service">
          <div className="circle">
            <div className="icon">
              <BsNewspaper />
            </div>
          </div>
          <div className="text">
            <h5>Newspaper jobs</h5>
            <p>JobFinder also has a newspaper job section, which enlists the jobs from the newspaper and is regularly updated.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );

}

export default Services;
