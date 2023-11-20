import React from "react";

const DetailsReg = (props) => {
  return (
    <div className="detailssec">
      <div className="detailsreg d-flex flex-column align-items-center my-5">
        <h2 className="mb-4">Registration</h2>
        <div className="atextbox w-75">
          <div class="row">
            <div className="col-md-6 my-2">
              <label htmlFor="Fname" className="m-2">
                First Name
              </label>
              <input
                type="text"
                name="Fname"
                id="Fname"
                className="form-control"
                placeholder="Enter First Name"
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="Lname" className="m-2">
                Last Name
              </label>
              <input
                type="text"
                name="Lname"
                id="Lname"
                className="form-control"
                placeholder="Enter Last Name"
              />
            </div>
            <div className="my-2">
              <label for="formFile" class="form-label m-2">
                Default file input example
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="email" className="m-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter Email"
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="phone" className="m-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="form-control"
                placeholder="Enter Phone"
              />
            </div>
            <div className="my-2">
              <label htmlFor="address" className="m-2">
                Address
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
              <label htmlFor="city" className="m-2">
                City
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
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="form-control"
                placeholder="Enter State"
              />
            </div>
            <div className=" my-2">
              <div className="col-md-6">
                <label htmlFor="zip" className="m-2">
                  Zip
                </label>
                <input
                  type="text"
                  name="zip"
                  id="zip"
                  className="form-control"
                  placeholder="Enter Zip"
                />
              </div>
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="passw" className="m-2">
                Password
              </label>
              <input
                type="password"
                name="passw"
                id="passw"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="cpassw" className="m-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="cpassw"
                id="cpassw"
                className="form-control"
                placeholder="Enter Confirm Password"
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button
              onClick={() => props.setDetails(true)}
              className="btn btn-primary my-4"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsReg;
