import React from "react";
import "../../scss/_services_section.scss";
import "../../scss/_services.scss";
import {
  MdAppSettingsAlt,
  MdEngineering,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { GiHistogram, GiCircuitry } from "react-icons/gi";
import { BsJournalCode } from "react-icons/bs";
import { RiUserSettingsLine } from "react-icons/ri";
import { HiOutlineNewspaper } from "react-icons/hi";

function Service() {
  return (
    <div className="our-services section-pad-t30">
      <div className="container">
        {/* Section Tittle */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle text-center">
              <span>FEATURED TOURS Packages</span>
              <h2>Browse Top Categories </h2>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-contnet-center">
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <RiUserSettingsLine />
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Design &amp; Creative</a>
                </h5>
                <span>(653)</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <BsJournalCode />
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Design &amp; Development</a>
                </h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <GiHistogram />
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Sales &amp; Marketing</a>
                </h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <MdAppSettingsAlt />
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Mobile Application</a>
                </h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <MdEngineering />
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Construction</a>
                </h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <GiCircuitry />
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Information Technology</a>
                </h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <MdOutlineRealEstateAgent />
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Real Estate</a>
                </h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
            <div className="single-services text-center mb-30">
              <div className="services-ion">
                <HiOutlineNewspaper />
              </div>
              <div className="services-cap">
                <h5>
                  <a href="job_listing.html">Content Writer</a>
                </h5>
                <span>(658)</span>
              </div>
            </div>
          </div>
        </div>
        {/* More Btn */}
        {/* Section Button */}
        <div className="row">
          <div className="col-lg-12">
            <div className="browse-btn2 text-center mt-50">
              <a href="job_listing.html" className="border-btn2">
                Browse All Sectors
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
