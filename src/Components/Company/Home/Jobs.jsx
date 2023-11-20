import React from "react";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <>
      <div className="atextbox py-3 ">
        <h3>Create a Job Post</h3>
        <div className="mt-3">
          <Link to="create" className="mybtn btn-blue me-3">
            Start with a New Post
          </Link>
          <Link to="selecttemp" className="mybtn btn-trans bdr-blue">
            Use Previous Post Job Template
          </Link>
        </div>
      </div>
      <div className="atextbox mt-3 pt-3">
        <div className="d-flex justify-content-between align-items-center">
          <div className="">28 Created Jobs</div>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Search job titles..."
              className="form-control me-2"
            />
            <input
              type="text"
              placeholder="Search location....."
              className="form-control"
            />
          </div>
        </div>
        <div className="mt-3">
          <div className="commntable">
            <section>
              <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th></th>
                      <th></th>
                      <th>Location</th>
                      <th></th>
                      <th>Job Status</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <thead></thead>
                  <tbody>
                    <tr className="">
                      <td colSpan={3}>
                        <p className="title mb-0">
                          Mobile Application Developer
                        </p>
                        <p className="posted mb-0 txt-muted">
                          Posted: 5 Feb 2023
                        </p>
                        <div className="d-flex justify-content-between pe-5 mt-3">
                          <p>
                            44
                            <br />
                            Active
                          </p>
                          <p className="txt-muted">
                            20
                            <br />
                            New
                          </p>
                          <p className="txt-muted">
                            0 of 44
                            <br />
                            Contacting
                          </p>
                        </div>
                      </td>
                      <td colSpan={2}>Sector 63 Noida, Noida, Uttar Pradesh</td>
                      <td>
                        <div className="d-flex align-items-center actbtn">
                          <Link
                            to="/employee/details"
                            className="mybtn btn-trans bdr-blue me-3"
                          >
                            <i class="fa-solid fa-circle txt-green fa-xs me-2"></i>
                            Open
                          </Link>
                          <i class="fa-solid fa-ellipsis-vertical fa-xl"></i>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td colSpan={3}>
                        <p className="title mb-0">
                          Mobile Application Developer
                        </p>
                        <p className="posted mb-0 txt-muted">
                          Posted: 5 Feb 2023
                        </p>
                        <div className="d-flex justify-content-between pe-5 mt-3">
                          <p>
                            44
                            <br />
                            Active
                          </p>
                          <p className="txt-muted">
                            20
                            <br />
                            New
                          </p>
                          <p className="txt-muted">
                            0 of 44
                            <br />
                            Contacting
                          </p>
                        </div>
                      </td>
                      <td colSpan={2}>Sector 63 Noida, Noida, Uttar Pradesh</td>
                      <td>
                        <div className="d-flex align-items-center actbtn">
                          <Link
                            to="/employee/details"
                            className="mybtn btn-trans bdr-blue me-3"
                          >
                            <i class="fa-solid fa-circle txt-green fa-xs me-2"></i>
                            Open
                          </Link>
                          <i class="fa-solid fa-ellipsis-vertical fa-xl"></i>
                        </div>
                      </td>
                    </tr>
                    <tr className="">
                      <td colSpan={3}>
                        <p className="title mb-0">
                          Mobile Application Developer
                        </p>
                        <p className="posted mb-0 txt-muted">
                          Posted: 5 Feb 2023
                        </p>
                        <div className="d-flex justify-content-between pe-5 mt-3">
                          <p>
                            44
                            <br />
                            Active
                          </p>
                          <p className="txt-muted">
                            20
                            <br />
                            New
                          </p>
                          <p className="txt-muted">
                            0 of 44
                            <br />
                            Contacting
                          </p>
                        </div>
                      </td>
                      <td colSpan={2}>Sector 63 Noida, Noida, Uttar Pradesh</td>
                      <td>
                        <div className="d-flex align-items-center actbtn">
                          <Link
                            to="/employee/details"
                            className="mybtn btn-trans bdr-blue me-3"
                          >
                            <i class="fa-solid fa-circle txt-green fa-xs me-2"></i>
                            Open
                          </Link>
                          <i class="fa-solid fa-ellipsis-vertical fa-xl"></i>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
