import React from "react";
import "../../scss/_footer.scss";
import NavLink from "../../Components/Navigation/NavLink/NavLink";

function Footer() {
  return (
    <footer>
      <div className="footer-area footer-bg footer-padding pt-5">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="single-footer-caption mb-30">
                  <div className="footer-tittle">
                    <h4>About Us</h4>
                    <div className="footer-pera">
                      <p>
                        Find most recent jobs in Nepal at jobfinder.com. We are
                        an online job search site in Nepal where you can find
                        career opportunities suitable for everyone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Contact Info</h4>
                  <ul>
                    <li>
                      <p>Address : Kamalpokhari, Kathmandu</p>
                    </li>
                    <li>
                      <a href="tel:9864214929">Phone : +977 9864214929</a>
                    </li>
                    <li>
                      <a href="mailto:pkonami696@gmail.com">
                        Email : pkonami696@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Important Link</h4>
                  <ul>
                    <li>
                      <NavLink Path="/" Link="Home" />
                    </li>
                    <li>
                      <NavLink Path="contact_us" Link="Contact Us" />
                    </li>
                    <li>
                      <NavLink Path="services" Link="Services" />
                    </li>
                    <li>
                      <NavLink Path="ourteam" Link="Our Team" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area footer-bg">
        <div className="container">
          <div className="footer-border">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-xl-10 col-lg-10 ">
                <div className="footer-copy-right">
                  <p>
                    Copyright © {new Date().getFullYear()} dotRAR All rights
                    reserved
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="footer-social f-right">
                  <a
                    href="https://www.facebook.com/profile.php?id=100088012467780"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://github.com/Rohan-mgr/laravel-project-5thsem"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github" />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
