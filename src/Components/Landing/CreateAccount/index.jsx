import React from "react";
import "./Styles.css";

import { Link } from "react-router-dom";

import EmployImage from "../../../assets/images/EmployImage.png";
import SeekerImage from "../../../assets/images/SeekerImage.png";

const index = () => {
  return (
    <div>
      <div className="createacc d-flex justify-content-center align-items-center h-100 my-5">
        <div className="">
          <h3 className="heading text-center">
            Continue to create account for
          </h3>
          <div className="">
            <div className="d-flex justify-content-center align-items-end">
              <div className="m-4 crecard">
                <img src={EmployImage} alt="" className="mt-2" />
                <h3 className=" d-flex justify-content-center mt-4">
                  For job seeker
                </h3>
                <div className="d-flex justify-content-center mt-4">
                  <Link to={"/candidatereg"} className="mybtn btn-blue">Continue</Link>
                </div>
              </div>
              <div className="m-4">
                <img src={SeekerImage} alt="" className="mt-2"/>
                <h3 className="d-flex justify-content-center mt-4">
                  For job employer
                </h3>
                <div className="d-flex justify-content-center mt-4">
                  <Link to={"/companyreg"} className="mybtn btn-blue">Continue</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
