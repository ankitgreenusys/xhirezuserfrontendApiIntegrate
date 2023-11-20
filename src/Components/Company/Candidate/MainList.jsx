import React from "react";

const MainList = () => {
  return (
    <div className="mainlist mt-3">
      <div className="atextbox py-4">
        <h3>Create a Job Post</h3>
        <div className="mt-3 d-flex">
          <input type="text" className="form-control me-3 w-50" />
          <button className="mybtn btn-blue me-3">Search Candidates</button>
        </div>
      </div>
      <div className="atextbox py-4 mt-3">
        <h3>Create a Job Post</h3>
        <p className="mt-3">
          <span className="me-4 txt-blue cursor-pointer">Active</span>
          <span className="txt-muted cursor-pointer">Awaiting review</span>
        </p>
        <div className="mt-3">
          <div className="commntable">
            <section>
              <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Status</th>
                      <th>Experience</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                  <thead></thead>
                  <tbody>
                    <tr className="">
                      <td>
                        <p className="title mb-0 txt-blue">Corey Dorwart</p>
                        <p className="posted mb-0 txt-muted">
                          Posted: 5 Feb 2023
                        </p>
                        <p className="posted mb-0 txt-muted">
                          Applied on Feb 8, 2023
                        </p>
                      </td>
                      <td>Awaiting</td>
                      <td>Fresher</td>
                      <td class="d-flex justify-content-between align-items-center">
                        <span>Noida, Uttar Pradesh</span>
                        <i class="fa-solid fa-ellipsis-vertical fa-xl"></i>
                      </td>
                    </tr>
                    <tr className="">
                      <td>
                        <p className="title mb-0 txt-blue">Corey Dorwart</p>
                        <p className="posted mb-0 txt-muted">
                          Posted: 5 Feb 2023
                        </p>
                        <p className="posted mb-0 txt-muted">
                          Applied on Feb 8, 2023
                        </p>
                      </td>
                      <td>Awaiting</td>
                      <td>Fresher</td>
                      <td class="d-flex justify-content-between align-items-center">
                        <span>Noida, Uttar Pradesh</span>
                        <i class="fa-solid fa-ellipsis-vertical fa-xl"></i>
                      </td>
                    </tr>
                    <tr className="">
                      <td>
                        <p className="title mb-0 txt-blue">Corey Dorwart</p>
                        <p className="posted mb-0 txt-muted">
                          Posted: 5 Feb 2023
                        </p>
                        <p className="posted mb-0 txt-muted">
                          Applied on Feb 8, 2023
                        </p>
                      </td>
                      <td>Awaiting</td>
                      <td>Fresher</td>
                      <td class="d-flex justify-content-between align-items-center">
                        <span>Noida, Uttar Pradesh</span>
                        <i class="fa-solid fa-ellipsis-vertical fa-xl"></i>
                      </td>
                    </tr>
                    <tr className="">
                      <td>
                        <p className="title mb-0 txt-blue">Corey Dorwart</p>
                        <p className="posted mb-0 txt-muted">
                          Posted: 5 Feb 2023
                        </p>
                        <p className="posted mb-0 txt-muted">
                          Applied on Feb 8, 2023
                        </p>
                      </td>
                      <td>Awaiting</td>
                      <td>Fresher</td>
                      <td class="d-flex justify-content-between align-items-center">
                        <span>Noida, Uttar Pradesh</span>
                        <i class="fa-solid fa-ellipsis-vertical fa-xl"></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainList;
