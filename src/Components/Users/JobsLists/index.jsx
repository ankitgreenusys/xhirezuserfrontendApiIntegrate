import { useState } from "react";
import "./Styles.css";
import { useSearchParams } from "react-router-dom";

import Filter from "./Filter";
import Lists from "./Lists";
import JobDesc from "./JobDesc";

const Index = () => {
  const [searchParams] = useSearchParams();
  const [jTitle, setjTitle] = useState(searchParams.get("jobTitle") || "");
  const [jLocation, setjLocation] = useState(
    searchParams.get("jobLocation") || ""
  );
  const [jExp, setjExp] = useState(searchParams.get("jobExperience") || "");

  const [activeJob, setActiveJob] = useState(null);

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
              value={jTitle}
              onChange={(e) => setjTitle(e.target.value)}
            />
            <button
              className="ms-3 mybtn btn-blue"
              onClick={() => {
                searchParams.set("jobTitle", jTitle);
                searchParams.set("jobLocation", jLocation);
                searchParams.set("jobExperience", jExp);
                window.location.search = searchParams.toString();
              }}
            >
              Search
            </button>
          </div>
          <Lists jTitle={jTitle} activeJob={activeJob} setActiveJob={setActiveJob} />
        </div>
        <div className="col-lg-5 px-2">
          <JobDesc activeJob={activeJob} />
        </div>
      </div>
    </div>
  );
};

export default Index;
