import React from "react";
import { Link } from "react-router-dom";

const Applied = () => {
  return (
    <div className="appliedsec">
      <div className="d-flex align-items-center flex-column">
        <div className="message">
          <h5 className="">Your application has been submitted</h5>
        </div>
        <div className="iconarea my-5">
          <i className="fas fa-check-circle txt-green"></i>
        </div>
        <div className="browsejobs">
          <Link to="/users/jobs" className="message txt-blue">
            <h5>Browse more related jobs</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Applied;
