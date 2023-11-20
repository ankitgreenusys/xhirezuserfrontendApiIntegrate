import React from "react";
import "./Styles.css";
import { useSearchParams } from "react-router-dom";

import Filter from "./Filter";
import Lists from "./Lists";
import JobDesc from "./JobDesc";

const Index = () => {
  const [searchParams] = useSearchParams();
  React.useEffect(() => {
    const search = searchParams.get("search");
    console.log(search);
  });

  return (
    <div class="jobslist marginframe">
      <div className="row">
        <div className="col-md-4 col-lg-2 px-2">
          <Filter />
        </div>
        <div className="col-md-8 col-lg-5 px-2">
          <div className="atextbox p-3 d-flex">
            <input
              class="form-control"
              type="text"
              placeholder="Search for jobs"
            />
            <button className="ms-3 mybtn btn-blue">Search</button>
          </div>
          <Lists />
        </div>
        <div className="col-lg-5 px-2">
          <JobDesc />
        </div>
      </div>
    </div>
  );
};

export default Index;
