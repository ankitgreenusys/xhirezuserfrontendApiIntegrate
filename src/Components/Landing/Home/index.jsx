import React from "react";
import "./Styles.css";

import { Link } from "react-router-dom";
import Companylogo from "../../../assets/images/companylogo.jpg";

const Index = () => {
  return (
    <div className="jobshomesec marginframe">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div className="hoheading">
          <h1 className="txt-blue">Find your dream job</h1>
          <p className="text-center">
            5 Lakh + jobs and 2 Lakh+ companies to explore
          </p>
        </div>
        <div className="searchboxes mt-4">
          <div className="d-flex">
            <input
              type="text"
              className="form-control mx-2"
              placeholder="Search job ..."
            />
            <input
              type="text"
              className="form-control mx-2"
              placeholder="location....."
            />
            <input
              type="text"
              className="form-control mx-2"
              placeholder="Experience"
            />
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Link to="list" className="mybtn btn-blue px-4">
              <i class="fa-solid fa-magnifying-glass"></i> Search
            </Link>
          </div>
        </div>
        <div className="commonjob">
          <Link to="list?search=ui" className="atextbox atextboxborder m-2">
            <i class="fa-solid fa-bullhorn me-1"></i>
            <span>Marketing</span>
            <i class="fa-solid fa-chevron-right ms-2"></i>
          </Link>
          <Link to="list?search=ui" className="atextbox atextboxborder m-2">
            <i class="fa-solid fa-bullhorn me-1"></i>
            <span>Marketing</span>
            <i class="fa-solid fa-chevron-right ms-2"></i>
          </Link>
          <Link to="list?search=ui" className="atextbox atextboxborder m-2">
            <i class="fa-solid fa-bullhorn me-1"></i>
            <span>Marketing</span>
            <i class="fa-solid fa-chevron-right ms-2"></i>
          </Link>
          <Link to="list?search=ui" className="atextbox atextboxborder m-2">
            <i class="fa-solid fa-bullhorn me-1"></i>
            <span>Marketing</span>
            <i class="fa-solid fa-chevron-right ms-2"></i>
          </Link>
          <Link to="list?search=ui" className="atextbox atextboxborder m-2">
            <i class="fa-solid fa-bullhorn me-1"></i>
            <span>Marketing</span>
            <i class="fa-solid fa-chevron-right ms-2"></i>
          </Link>
          <Link to="list?search=ui" className="atextbox atextboxborder m-2">
            <i class="fa-solid fa-bullhorn me-1"></i>
            <span>Marketing</span>
            <i class="fa-solid fa-chevron-right ms-2"></i>
          </Link>
          <Link to="list?search=ui" className="atextbox atextboxborder m-2">
            <i class="fa-solid fa-bullhorn me-1"></i>
            <span>Marketing</span>
            <i class="fa-solid fa-chevron-right ms-2"></i>
          </Link>
          <Link to="list?search=ui" className="atextbox atextboxborder m-2">
            <i class="fa-solid fa-bullhorn me-1"></i>
            <span>Marketing</span>
            <i class="fa-solid fa-chevron-right ms-2"></i>
          </Link>
          <Link to="list?search=ui" className="atextbox atextboxborder m-2">
            <i class="fa-solid fa-bullhorn me-1"></i>
            <span>Marketing</span>
            <i class="fa-solid fa-chevron-right ms-2"></i>
          </Link>
        </div>
        <div className="featurehead">
          <h1 className="txt-blue text-center">Featured companies</h1>
          <div className="d-flex justify-content-between">
            <div className="atextbox atextboxborder m-2">
              <div className="d-flex align-items-center mb-2">
                <div className="cmpyimg me-3">
                  <img src={Companylogo} alt="" />
                </div>
                <div className="">
                  <div className="cpmynme">Talk Space</div>
                  <div className="cpmydet txt-muted">Software Company</div>
                </div>
              </div>
              <div className="">
                20+ active jobs
                <i class="fa-solid fa-chevron-right txt-blue ms-2"></i>
              </div>
            </div>
            <div className="atextbox atextboxborder m-2">
              <div className="d-flex align-items-center mb-2">
                <div className="cmpyimg me-3">
                  <img src={Companylogo} alt="" />
                </div>
                <div className="">
                  <div className="cpmynme">Talk Space</div>
                  <div className="cpmydet txt-muted">Software Company</div>
                </div>
              </div>
              <div className="">
                20+ active jobs
                <i class="fa-solid fa-chevron-right txt-blue ms-2"></i>
              </div>
            </div>
            <div className="atextbox atextboxborder m-2">
              <div className="d-flex align-items-center mb-2">
                <div className="cmpyimg me-3">
                  <img src={Companylogo} alt="" />
                </div>
                <div className="">
                  <div className="cpmynme">Talk Space</div>
                  <div className="cpmydet txt-muted">Software Company</div>
                </div>
              </div>
              <div className="">
                20+ active jobs
                <i class="fa-solid fa-chevron-right txt-blue ms-2"></i>
              </div>
            </div>
            <div className="atextbox atextboxborder m-2">
              <div className="d-flex align-items-center mb-2">
                <div className="cmpyimg me-3">
                  <img src={Companylogo} alt="" />
                </div>
                <div className="">
                  <div className="cpmynme">Talk Space</div>
                  <div className="cpmydet txt-muted">Software Company</div>
                </div>
              </div>
              <div className="">
                20+ active jobs
                <i class="fa-solid fa-chevron-right txt-blue ms-2"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="rolesjobs">
          <h1 className="txt-blue text-center">
            Discover jobs across popular roles
          </h1>
          <div className="d-flex justify-content-between">
            <div className="atextbox atextboxborder m-2 roledesc">
              <h5>Full Stack Developer</h5>
              <span>100+ Jobs</span>
              <i class="fa-solid fa-chevron-right ms-2 txt-blue"></i>
            </div>
            <div className="atextbox atextboxborder m-2 roledesc">
              <h5>Front End Designer</h5>
              <span>100+ Jobs</span>
              <i class="fa-solid fa-chevron-right ms-2 txt-blue"></i>
            </div>
            <div className="atextbox atextboxborder m-2 roledesc">
              <h5>DevOps Engineer</h5>
              <span>100+ Jobs</span>
              <i class="fa-solid fa-chevron-right ms-2 txt-blue"></i>
            </div>
            <div className="atextbox atextboxborder m-2 roledesc">
              <h5>Mobile App Developer</h5>
              <span>100+ Jobs</span>
              <i class="fa-solid fa-chevron-right ms-2 txt-blue"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
