import React from "react";

const FullReg = () => {
  return (
    <div className="fulreg">
      <div className="d-flex flex-column align-items-center my-5">
        <h2 className="mb-4">Registration</h2>
        <div className="atextbox w-75">
          <div class="row">
            <div className="col-md-12 my-2">
              <label htmlFor="Fname" className="m-2">
                Current job title
              </label>
              <input
                type="text"
                name="Fname"
                id="Fname"
                className="form-control"
                placeholder="Enter Current job title"
              />
            </div>
            <div className="col-md-12 my-2">
              <label htmlFor="Lname" className="m-2">
                Current employer
              </label>
              <input
                type="text"
                name="Lname"
                id="Lname"
                className="form-control"
                placeholder="Enter Current employer"
              />
            </div>

            <div className="col-md-7 my-2">
              <label htmlFor="" className="m-2">
                Work experience
              </label>
              <div className="d-flex">
                <div className="w-100 me-3">
                  <p className="smalltxt m-2">Start date</p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="w-100">
                  <p className="smalltxt m-2">Start date</p>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
            </div>
            <label htmlFor="" className="m-2 mt-4">
              Educational details
            </label>
            <div className="col-md-12 my-2">
              <label htmlFor="phone" className="m-2">
                Educational level
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Enter Phone"
              />
            </div>
            <div className="col-md-12 my-2">
              <label htmlFor="phone" className="m-2">
                Institution
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Enter Phone"
              />
            </div>

            <div className="col-md-6 my-2">
              <label htmlFor="city" className="m-2">
                Field of Study
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="form-control"
                placeholder="Enter City"
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="state" className="m-2">
                Grade
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="form-control"
                placeholder="Enter State"
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="city" className="m-2">
                Start Year
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="form-control"
                placeholder="Enter City"
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="state" className="m-2">
                End Year
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="form-control"
                placeholder="Enter State"
              />
            </div>
            <p className="smalltxt mt-4 mb-2">+ Add More</p>
            <div className=" my-2">
              <label htmlFor="address" className="m-2">
                Skiils
              </label>
              <textarea
                name="address"
                id="address"
                rows="3"
                className="form-control"
                placeholder="Enter Address"
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="passw" className="m-2">
                Industry
              </label>
              <input
                type="text"
                name="passw"
                id="passw"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="cpassw" className="m-2">
                job type
              </label>
              <input
                type="text"
                name="cpassw"
                id="cpassw"
                className="form-control"
                placeholder="Enter Confirm Password"
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="passw" className="m-2">
                Location
              </label>
              <input
                type="text"
                name="passw"
                id="passw"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="cpassw" className="m-2">
                Salary
              </label>
              <input
                type="text"
                name="cpassw"
                id="cpassw"
                className="form-control"
                placeholder="Enter Confirm Password"
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary my-4">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullReg;
