import React from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import "./Styles.css";

import Headerlogo from "../../../assets/images/headerlogo.png";

const Index = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg header px-4 py-3">
        <div className="container-fluid">
          <div className="">
            <Link className="navbar-brand" to="/">
              <img src={Headerlogo} className="headerlogo" alt="" />
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-nav navlinks">
            <NavLink to="jobs">
              <i className="fa-solid fa-briefcase"></i> Dashboard
            </NavLink>
            <NavLink to="company">
              <i className="fa-solid fa-city"></i> Companies
            </NavLink>
            <NavLink to="myjobs">
              <i class="fa-regular fa-bookmark"></i> Saved Jobs
            </NavLink>
            <NavLink to="messages">
              <i className="fa-solid fa-message"></i> Messages
            </NavLink>
          </div>
          <div className="navbar-nav d-flex align-items-center account">
            <div className="acc-notif">
              <i className="fa-solid fa-bell icon d-flex justify-content-around align-items-center"></i>
            </div>
            <Link to="/users/profile">
              <div className="nav-item d-flex">
                <i className="fa-solid fa-circle-user icon d-flex justify-content-around align-items-center"></i>
                <div className="acc-details">
                  <p className="txt-blue my-0 mx-1 name">Mohit Kumar</p>
                  <p className="txt-muted my-0 mx-1 email">mohit@gmail.com</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Index;
