import React from "react";

import { Link } from "react-router-dom";

const Submitted = () => {
  return (
    <div className="submittedsec d-flex align-items-center justify-content-center flex-column">
      <div className="d-flex align-items-center flex-column">
        <div className="iconarea mb-5">
          <i className="fas fa-check-circle txt-green"></i>
        </div>
        <div className="message">
          <h5 className="">Job Post Successful</h5>
        </div>
        <div className="browsejobs">
          <Link to="/users/jobs" className="message txt-blue">
            <p>
              View Post <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </p>
          </Link>
        </div>
        <div className="mt-5">
          <Link to="/users/jobs" className="mybtn btn-blue">
            Go To Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Submitted;
