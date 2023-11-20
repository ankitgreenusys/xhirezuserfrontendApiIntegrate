import React from "react";
import { Link } from "react-router-dom";


const PostedJobs = () => {
  return (
    <div className="postedjobstab">
      <div className="row">
        <div className="col-md-6 col-lg-2 px-2">
          <div className="atextbox atextboxborder jobpost ">
            <h4>Mobile Application Developer</h4>
            <Link to="/users/jobs/1" className="link txt-blue">
              <span>View Job</span>
              <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
            </Link>
          </div>
        </div>
        <div className="col-md-6 col-lg-2 px-2">
          <div className="atextbox atextboxborder jobpost ">
            <h4>Mobile Application Developer</h4>
            <div className="link txt-blue">
              <span>View Job</span>
              <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-2 px-2">
          <div className="atextbox atextboxborder jobpost ">
            <h4>Mobile Application Developer</h4>
            <div className="link txt-blue">
              <span>View Job</span>
              <i class="fa-solid fa-arrow-up-right-from-square ms-2"></i>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-2 px-2">
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
  );
};

export default PostedJobs;
