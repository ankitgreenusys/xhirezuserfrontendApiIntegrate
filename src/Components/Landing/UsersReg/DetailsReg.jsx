import { useState } from "react";
import api from "../../../utils/api";

const DetailsReg = ({ userId, setDetails }) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [file, setFile] = useState(null);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("India");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const registerUser = async () => {
    const formData = new FormData();
    formData.append("firstName", fName);
    formData.append("lastName", lName);
    formData.append("resume", file);
    formData.append("number", phone);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("state", state);
    formData.append("country", country);
    formData.append("password", password);
    try {
      const { data } = await api.post(
        `/employee/registration/${userId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      setDetails(true);
    } catch (error) {
      console.log(error);
    }
  };

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
                value={fName}
                onChange={(e) => setFName(e.target.value)}
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
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div className="my-2">
              <label for="formFile" class="form-label m-2">
                Resume
              </label>
              <input
                class="form-control"
                type="file"
                id="formFile"
                value={file}
                onChange={(e) => setFile(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="country" className="m-2">
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className="form-control"
                placeholder="Enter Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button
              onClick={() => {
                if (password === cPassword) {
                  registerUser();
                } else {
                  alert("Passwords do not match");
                }
              }}
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
