import React from "react";
import "./Styles.css";

import { Link } from "react-router-dom";
import Companylogo from "../../../assets/images/companylogo.jpg";

const Index = () => {
  return (
    <div className="comphomesec marginframe">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div className="compcards">
          <h1 className="txt-blue text-center">Top companies hiring now</h1>
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
              <Link to="id" className="">
                20+ active jobs
                <i class="fa-solid fa-chevron-right txt-blue ms-2"></i>
              </Link>
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
        <div className="compcards mt-5">
          <h1 className="txt-blue text-center">Browse more companies</h1>
          <div className="d-flex justify-content-center">
            <div className="mb-3 d-flex justify-content-between w-75">
              <input type="text" className="form-control w-75" />
              <Link to="/users/company" className="mybtn btn-blue px-4">
                Search company
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-between flex-wrap">
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
      </div>
    </div>
  );
};

export default Index;
