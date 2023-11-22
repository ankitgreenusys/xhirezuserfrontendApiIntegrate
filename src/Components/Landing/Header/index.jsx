import { Link, Outlet } from "react-router-dom";
import Headerlogo from "../../../assets/images/headerlogo.png";
import "./Styles.css";

const Index = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg headermain px-4 py-3">
        <div className="container-fluid">
          <div className="">
            <Link className="navbar-brand" to="/">
              <img src={Headerlogo} className="headerlogo" alt="" />
            </Link>
          </div>
          <div className="navbar-nav d-flex align-items-center account">
            <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <button
                    class="btn dropdownbtn dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sign In
                  </button>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li>
                      <Link class="dropdown-item" to="/companylogin">
                        Employer
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/candidatelogin">
                        Candidate
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <Link to="/createacc" className="">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Index;
