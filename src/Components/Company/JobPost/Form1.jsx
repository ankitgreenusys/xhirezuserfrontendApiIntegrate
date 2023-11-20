import React from "react";

const Form1 = () => {
  return (
    <div className="form1 my-2 mb-4">
      <p className="regin my-2">
        Country <span className="txt-muted mx-2">India</span>
        <i class="fa-solid fa-pen"></i>
      </p>
      <div className="mt-4">
        <label htmlFor="jobtitle" className="form-label">
          Job Title
        </label>
        <input
          type="text"
          className="form-control"
          id="jobtitle"
          placeholder="Enter Job Title"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="" className="form-label">
          Location
        </label>
        <div className="locadd">
          <div className="">
            <label htmlFor="strtadd" className="form-label">
              Street Address <span className="txt-muted">(Optional)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="strtadd"
              placeholder="Enter Street Address"
            />
          </div>
          <div className="mt-3 ">
            <label htmlFor="subloc" className="form-label">
              Sub locality
            </label>
            <input
              type="text"
              className="form-control"
              id="subloc"
              placeholder="Enter  Sub locality"
            />
          </div>
          <div className="mt-3 row">
            <div className="col-md-4">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                placeholder="Enter City"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="pincode" className="form-label">
                Pincode
              </label>
              <input
                type="text"
                className="form-control"
                id="pincode"
                placeholder="Enter Pincode"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <input
                type="text"
                className="form-control"
                id="state"
                placeholder="Enter State"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="jobdesc" className="form-label">
          Job Type
        </label>
        <div className="chipcheck">
          <ul class="ks-cboxtags">
            <li>
              <input type="checkbox" id="parttime" value="Part-time" />
              <label for="parttime">Part-time</label>
            </li>
            <li>
              <input type="checkbox" id="fulltime" value="Full-time" />
              <label for="fulltime">Full-time</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="regularpre"
                value="Regular/Permanent"
              />
              <label for="regularpre">Regular/Permanent</label>
            </li>
            <li>
              <input type="checkbox" id="internship" value="Internship" />
              <label for="internship">Internship</label>
            </li>
            <li>
              <input type="checkbox" id="contract" value="Contract" />
              <label for="contract">Contract</label>
            </li>
            <li>
              <input type="checkbox" id="fresher" value="Fresher" />
              <label for="fresher">Fresher</label>
            </li>
            <li>
              <input type="checkbox" id="freelencer" value="Freelencer" />
              <label for="freelencer">Freelencer</label>
            </li>
            <li>
              <input type="checkbox" id="volunteer" value="Volunteer" />
              <label for="volunteer">Volunteer</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="jobsch" className="form-label">
          Job Schedule
        </label>
        <div className="chipcheck">
          <ul class="ks-cboxtags">
            <li>
              <input type="checkbox" id="dayshift" value="Day Shift" />
              <label for="dayshift">Day Shift</label>
            </li>
            <li>
              <input type="checkbox" id="nightshift" value="Night Shift" />
              <label for="nightshift">Night Shift</label>
            </li>
            <li>
              <input type="checkbox" id="morningshift" value="Morning Shift" />
              <label for="morningshift">Morning Shift</label>
            </li>
            <li>
              <input type="checkbox" id="eveningshift" value="Evening Shift" />
              <label for="eveningshift">Evening Shift</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="flexibleshift"
                value="Flexible Shift"
              />
              <label for="flexibleshift">Flexible Shift</label>
            </li>
            <li>
              <input type="checkbox" id="fixedshift" value="Fixed Shift" />
              <label for="fixedshift">Fixed Shift</label>
            </li>
            <li>
              <input type="checkbox" id="ushift" value="US Shift" />
              <label for="ushift">US Shift</label>
            </li>
            <li>
              <input type="checkbox" id="other" value="Other" />
              <label for="other">Other</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Form1;
