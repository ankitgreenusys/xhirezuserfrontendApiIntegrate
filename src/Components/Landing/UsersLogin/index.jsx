import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../utils/api";
import "./Styles.css";

const Index = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    try {
      const { data } = await api.post("/employee/login", { email, password });
      console.log(data);
      localStorage.setItem("tokenXHIRE", data.token);
      navigate("/users/jobs");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login">
      <div className="d-flex flex-column marginframe my-5">
        <h2 className="mb-4 text-center">Candidate Account Access</h2>
        <div className="d-flex justify-content-around align-items-center">
          <div className="d-none d-md-block">
            <img src="/assets/images/Loginimg.jpg" alt="" />
          </div>
          <div className="col-md-4">
            <div className="atextbox w-sm-100">
              <div class="p-2">
                <div className="my-2">
                  <label htmlFor="email" className="m-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="my-2">
                  <label htmlFor="passw" className="m-1">
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
                <button className="mybtn btn-blue my-4 w-100" onClick={login}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
