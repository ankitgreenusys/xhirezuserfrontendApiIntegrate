import React from "react";
import "./Styles.css";

const Index = () => {
  return (
    <div className="profplansec marginframe">
      <h1>Your Profile</h1>
      <div className="dividehr"></div>
      <div className="detaisplan">
        <div className="atextbox my-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="topic">| Active Plan</div>
          </div>
          <div className="prohead">Plan name</div>
          <div className="prodesc">XYZ Plan</div>
          <div className="prohead">Starting date</div>
          <div className="prodesc">20 Jan' 23</div>
          <div className="prohead">Expiry date</div>
          <div className="prodesc">14 Mar' 23</div>
        </div>
        <div className="atextbox my-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="topic">| Other Settings</div>
          </div>
          <div className="prohead">Email address</div>
          <div className="prodesc">
            rahul@gjaa.com
            <span className="prohead ms-2 cursor-pointer">Change address</span>
          </div>
          <div className="prohead">Password</div>
          <div className="prodesc">
            *********
            <span className="prohead ms-2 cursor-pointer">
              Change password
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
