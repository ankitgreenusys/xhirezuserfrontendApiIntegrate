import React from "react";
import "./Styles.css";

import PostedJobs from "./PostedJobs";
import WhyUs from "./WhyUs";
import Salaries from "./Salaries";
import AboutUs from "./AboutUs";

import BackgroundImage from "../../../assets/images/imagebg.jpg";
import CompanyLogo from "../../../assets/images/CompLogo.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = React.useState(1);

  return (
    <div className="comppagesec">
      <div className="bgimage">
        <img src={BackgroundImage} alt="" />
      </div>
      <div className="cmpdta">
        <div className="detpage d-flex justify-content-center align-items-center text-center">
          <div className="">
            <div className="cmplogo">
              <img src={CompanyLogo} alt="" />
            </div>
            <div className="cmpdet">
              <div className="cmpname txt-blue">Talk Space</div>
              <div className="cmptype">Software Company</div>
              <div className="cmplink">
                <span>Visit Website</span>
                <i class="fa-solid fa-arrow-up-right-from-square txt-blue"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="compdettabs">
          <div className="tabs d-flex">
            <div
              onClick={() => setActiveTab(1)}
              className={`tab ${activeTab === 1}`}
            >
              <span>Posted jobs</span>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className={`tab ${activeTab === 2}`}
            >
              <span>Why join us</span>
            </div>
            <div
              onClick={() => setActiveTab(3)}
              className={`tab ${activeTab === 3}`}
            >
              <span>Salaries</span>
            </div>
            <div
              onClick={() => setActiveTab(4)}
              className={`tab ${activeTab === 4}`}
            >
              <span>About us</span>
            </div>
          </div>
          <div className="discontent">
            {activeTab === 1 && <PostedJobs />}
            {activeTab === 2 && <WhyUs />}
            {activeTab === 3 && <Salaries />}
            {activeTab === 4 && <AboutUs />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
