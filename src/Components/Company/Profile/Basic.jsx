import React from "react";

import companyimg from "../../../assets/images/CompanyProfile.jpg";

const Basic = () => {
  return (
    <div className="basicpro">
      <div className="atextbox d-flex justify-content-center align-items-center">
        <div className="text-center desc">
          <img src={companyimg} alt="" className="" />
          <input className="form-control mt-3" value={"Microsoft"} />
          <input className="form-control mt-3" value={"Software Company"} />
        </div>
      </div>
      <div className="atextbox mt-3 px-3 py-4 detils">
        <div className="">
          <label class="form-label" htmlFor="compsize">
            Company Size
          </label>
          <select className="form-select" name="compsize" id="">
            <option value="">15 to 25</option>
            <option value="">25 to 50</option>
            <option value="">50 to 100</option>
            <option value="">100 to 200</option>
          </select>
        </div>
        <div className="mt-3">
          <label class="form-label" htmlFor="headqua">
            Headquater
          </label>
          <input
            type="text"
            className="form-control"
            value={"New Delhi"}
            name="headqua"
            id="headqua"
          />
        </div>
        <div className="mt-3">
          <label class="form-label" htmlFor="link">
            Link
          </label>
          <input
            type="text"
            className="form-control"
            value={"Website"}
            name="link"
            id="link"
          />
        </div>
      </div>
    </div>
  );
};

export default Basic;
