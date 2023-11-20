import React from "react";

const Form2 = () => {
  return (
    <div className="form2 my-2 mb-4">
      <div className="mt-4">
        <label htmlFor="" className="form-label">
          What is the pay?
        </label>
        <div className="salary">
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="minsal" className="form-label">
                Minimum
              </label>
              <input
                type="number"
                className="form-control"
                id="minsal"
                placeholder="Enter Minimum Salary"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="maxsal" className="form-label">
                Maximum
              </label>
              <input
                type="number"
                className="form-control"
                id="maxsal"
                placeholder="Enter Maximum Salary"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="saltype" className="form-label">
                Salary Type
              </label>
              <select id="saltype" className="form-select">
                <option selected hidden>
                  Choose...
                </option>
                <option>Per Month</option>
                <option>Per Year</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="exper" className="form-label">
          Experience needed
        </label>
        <div className="">
          <div className="row">
            <div className="col-md-4">
              <input
                type="number"
                className="form-control"
                id="exper"
                placeholder="Enter Minimum Salary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="jobdesc" className="form-label">
          Do you have any offer of the following supplemental pay?
        </label>
        <div className="chipcheck">
          <ul class="ks-cboxtags">
            <li>
              <input type="checkbox" id="overtime" value="Overtime" />
              <label for="overtime">Overtime</label>
            </li>
            <li>
              <input type="checkbox" id="quarbonus" value="Quarterly Bonus" />
              <label for="quarbonus">Quarterly Bonus</label>
            </li>
            <li>
              <input type="checkbox" id="yearbonus" value="Yearly Bonus" />
              <label for="yearbonus">Yearly Bonus</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="performancebonus"
                value="Performance Bonus"
              />
              <label for="performancebonus">Performance Bonus</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="shiftallowance"
                value="Shift Allowance"
              />
              <label for="shiftallowance">Shift Allowance</label>
            </li>
            <li>
              <input type="checkbox" id="joiningbonus" value="Joining Bonus" />
              <label for="joiningbonus">Joining Bonus</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="commissionpay"
                value="Commission Pay"
              />
              <label for="commissionpay">Commission Pay</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="" className="form-label">
          Any benefit offered?
        </label>
        <div className="chipcheck">
          <ul class="ks-cboxtags">
            <li>
              <input type="checkbox" id="healthinsu" value="Health Insurance" />
              <label for="healthinsu">Health Insurance</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="providentfund"
                value="Provident Fund"
              />
              <label for="providentfund">Provident Fund</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="paidsickleave"
                value="Paid Sick Leave"
              />
              <label for="paidsickleave">Paid Sick Leave</label>
            </li>
            <li>
              <input type="checkbox" id="workfromhome" value="Work From Home" />
              <label for="workfromhome">Work From Home</label>
            </li>
            <li>
              <input type="checkbox" id="paidtimeoff" value="Paid Time Off" />
              <label for="paidtimeoff">Paid Time Off</label>
            </li>
            <li>
              <input type="checkbox" id="foodprovided" value="Food Provided" />
              <label for="foodprovided">Food Provided</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="lifeinsurance"
                value="Life Insurance"
              />
              <label for="lifeinsurance">Life Insurance</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="jobdesc" className="form-label">
          Do you have any offer of the following supplemental pay?
          <p className="txt-muted mb-1">
            Describe your responsibilities of this job, required work
            experience, skills or education.
          </p>
        </label>
        <textarea name="" id="" rows="10"></textarea>
      </div>
    </div>
  );
};

export default Form2;
