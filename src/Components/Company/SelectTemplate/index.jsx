import React from "react";
import "./Styles.css";

// import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="selecttemp marginframe d-flex justify-content-center">
      <div className="w-50">
        <h3>Create a Job Post</h3>
        <h5>Select previous job and use as template</h5>
        <div className="atextbox py-1 mt-3">
          <div className="">
            <div className="searchbar p-2 pb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by job title and location"
              />
            </div>
            <div className="commntable">
              <section>
                <div className="tbl-header">
                  <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Posted Date</th>
                        <th>Location</th>
                      </tr>
                    </thead>
                  </table>
                </div>
                <div className="tbl-content">
                  <table cellPadding="0" cellSpacing="0" border="0">
                    <thead></thead>
                    <tbody>
                      <tr className="cursor-pointer">
                        <td>
                          <p className="title mb-0 txt-blue">Corey Dorwart</p>
                        </td>
                        <td>28 Nov 2023</td>
                        <td class="d-flex justify-content-between align-items-center">
                          <span>Noida, Uttar Pradesh</span>
                        </td>
                      </tr>
                      <tr className="cursor-pointer">
                        <td>
                          <p className="title mb-0 txt-blue">Corey Dorwart</p>
                        </td>
                        <td>28 Nov 2023</td>
                        <td class="d-flex justify-content-between align-items-center">
                          <span>Noida, Uttar Pradesh</span>
                        </td>
                      </tr>
                      <tr className="cursor-pointer">
                        <td>
                          <p className="title mb-0 txt-blue">Corey Dorwart</p>
                        </td>
                        <td>28 Nov 2023</td>
                        <td class="d-flex justify-content-between align-items-center">
                          <span>Noida, Uttar Pradesh</span>
                        </td>
                      </tr>
                      <tr className="cursor-pointer">
                        <td>
                          <p className="title mb-0 txt-blue">Corey Dorwart</p>
                        </td>
                        <td>28 Nov 2023</td>
                        <td class="d-flex justify-content-between align-items-center">
                          <span>Noida, Uttar Pradesh</span>
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
    </div>
  );
};

export default Index;
