import React from "react";

import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div className="cmpydettab">
      <div className="atextbox">
        <div className="my-3">
          <div className="degname">UI/UX Designer</div>
          <div className="cmpname txt-blue">Greenusys Techonology</div>
          <div className="cmploc">Noida, India</div>
        </div>
        <div className="divider"></div>
        <div className="my-3">
          <div className="cmpmoredt">
            <div className="">
              <div className="my-2">Job type</div>
              <ul>
                <li>Full time</li>
                <li>Part time</li>
              </ul>
            </div>
            <div className="">
              <div className="my-2">Job schedule</div>
              <ul>
                <li>Day shift</li>
                <li>Morning Shift</li>
              </ul>
            </div>
            <div className="">
              <div className="my-2">Salary</div>
              <ul>
                <li>₹ 10,000 - ₹ 15,000</li>
              </ul>
            </div>
          </div>
          <Link to="/users/jobs/1" className="txt-blue">
          View full job description
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Company;
