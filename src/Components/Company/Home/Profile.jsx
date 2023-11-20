import React from "react";

import companyimg from "../../../assets/images/CompanyProfile.jpg";

const Profile = () => {
  return (
    <div className="compprofilesec">
      <div className="atextbox d-flex justify-content-center align-items-center">
        <div className="text-center desc">
          <img src={companyimg} alt="" className="" />
          <h3>Microsoft</h3>
          <p className="txt-muted">Software Company</p>
          <button className="mybtn">Edit Profile</button>
        </div>
      </div>
      <div className="atextbox mt-3 px-3 py-4 detils">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Company Size</h2>
          <span>15 to 25</span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h2>Headquater</h2>
          <span>New Delhi</span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h2>Link</h2>
          <span>Website</span>
        </div>
      </div>
      <div className="mt-3 atextbox decrip pt-3">
        <h3>About Us</h3>
        <p>
          Established in 1994, ATLANTA SYSTEMS PVT. LTD. is India's fastest
          growing IoT products & solutions company. We render long-term value
          creations for our Industrie-4.0 partners, which ensures global
          acceptance. We can boast of brilliance through your highly
          skilled-n-creative manpower..more
        </p>
      </div>
    </div>
  );
};

export default Profile;
