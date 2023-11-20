import { useState } from "react";

const DetailsReg = () => {
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [description, setDescription] = useState("");
  const [size, setSize] = useState("");
  const [file, setFile] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  return (
    <div className="detailssec">
      <div className="detailsreg d-flex flex-column align-items-center my-5">
        <h2 className="mb-4">Registration</h2>
        <div className="atextbox w-75">
          <div class="row">
            <div className="col-md-6 my-2">
              <label htmlFor="name" className="m-2">
                Company name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="Enter Company Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="Lname" className="m-2">
                Industry
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option selected hidden>
                  Select Industry
                </option>
                <option value="it">IT</option>
                <option value="health">Health</option>
                <option value="edu">Education</option>
              </select>
            </div>
            <div className="my-2">
              <label htmlFor="description" className="m-2">
                Company description
              </label>
              <textarea
                name="description"
                id="description"
                rows="3"
                className="form-control"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="Lname" className="m-2">
                Company Size
              </label>
              <select
                class="form-select"
                aria-label="Default select example"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option selected hidden>
                  Select Company Size
                </option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="500-1000">500+</option>
              </select>
            </div>
            <div className="my-2">
              <label for="formFile" class="form-label m-2">
                Default file input example
              </label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="email" className="m-2">
                Contact person
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
              <label htmlFor="state" className="m-2">
                Phone number
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
            <button className="btn btn-primary my-4">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsReg;
