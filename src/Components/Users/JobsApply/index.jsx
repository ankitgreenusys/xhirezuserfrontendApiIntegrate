import React from "react";
import "./Styles.css";

import JobDesc from "./JobDesc";
import UserData from "./UserData";
import ReviewData from "./ReviewData";
import Applied from "./Applied";

const Index = () => {
  return (
    <div class="jobsapplysec marginframe">
      {/* <Applied /> */}
      <div className="row">
        <div className="col-lg-6 px-2">
          <UserData />
          {/* <ReviewData /> */}
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 px-2">
          <JobDesc />
        </div>
      </div>
    </div>
  );
};

export default Index;
