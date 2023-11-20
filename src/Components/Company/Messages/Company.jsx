import React from "react";

const Company = () => {
  return (
    <div className="cmpydettab">
      <div className="atextbox py-4">
        <div className="mt-1">
          <h4>Status</h4>
          <select className="form-select bdr-blue" name="status" id="">
            <option value="">contacting</option>
            <option value="">Inactive</option>
            <option value="">Active</option>
          </select>
        </div>
        <div className="mt-3">
          <h4>Status</h4>
          <button className="mybtn btn-trans bdr-blue">Download resume</button>
        </div>
      </div>
      <div className="ques mt-3">
        <h4>Application qualifications</h4>
        <p className="quest mb-1 mt-3">
          Will you be able to reliably commute or relocate to Sec- 63 Noida,
          Noida, Uttar Pradesh for this job?
        </p>
        <p className="ans txt-blue mb-3">
          Yes, I can make communicate and planning to relocate
        </p>
        <p className="quest mb-1">
          Will you be able to reliably commute or relocate to Sec- 63 Noida,
          Noida, Uttar Pradesh for this job?
        </p>
        <p className="ans txt-blue mb-3">
          Yes, I can make communicate and planning to relocate
        </p>
        <p className="quest mb-1">
          Will you be able to reliably commute or relocate to Sec- 63 Noida,
          Noida, Uttar Pradesh for this job?
        </p>
        <p className="ans txt-blue mb-3">
          Yes, I can make communicate and planning to relocate
        </p>
        <p className="quest mb-1">
          Will you be able to reliably commute or relocate to Sec- 63 Noida,
          Noida, Uttar Pradesh for this job?
        </p>
        <p className="ans txt-blue mb-3">
          Yes, I can make communicate and planning to relocate
        </p>
      </div>
    </div>
  );
};

export default Company;
