import React from "react";

import { Link } from "react-router-dom";

const Major = () => {
  return (
    <div className="majpro mt-5">
      <div className="">
        <label htmlFor="abtus">About Us</label>
        <textarea
          className="form-control mt-2"
          name="abtus"
          id="abtus"
          rows="5"
        >
          Established in 1994, ATLANTA SYSTEMS PVT. LTD. is India’s fastest
          growing IoT products & solutions company. We render long-term value
          creations for our Industrie-4.0 partners, which ensures global
          acceptance. We can boast of brilliance through your highly
          skilled-n-creative manpower..
        </textarea>
      </div>
      <div className="mt-4">
        <label htmlFor="yjoinus">Why Join Us</label>
        <textarea
          className="form-control mt-2"
          name="yjoinus"
          id="yjoinus"
          rows="5"
        >
          Established in 1994, ATLANTA SYSTEMS PVT. LTD. is India’s fastest
          growing IoT products & solutions company. We render long-term value
          creations for our Industrie-4.0 partners, which ensures global
          acceptance. We can boast of brilliance through your highly
          skilled-n-creative manpower..
        </textarea>
      </div>
      <div className="mt-4">
        <p>Posted Jobs</p>
        <div className="row postedjobstab">
          <div className="col-md-6 col-lg-3 px-2">
            <div className="atextbox atextboxborder jobpost ">
              <h4>Mobile Application Developer</h4>
              <Link to="/users/jobs/1" className="link txt-blue">
                <span>View Job</span>
                <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 px-2">
            <div className="atextbox atextboxborder jobpost ">
              <h4>Mobile Application Developer</h4>
              <div className="link txt-blue">
                <span>View Job</span>
                <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 px-2">
            <div className="atextbox atextboxborder jobpost ">
              <h4>Mobile Application Developer</h4>
              <div className="link txt-blue">
                <span>View Job</span>
                <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 px-2">
            <div className="atextbox atextboxborder jobpost ">
              <h4>Mobile Application Developer</h4>
              <div className="link txt-blue">
                <span>View Job</span>
                <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Major;
