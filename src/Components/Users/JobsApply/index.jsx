import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../../../utils/api";
import "./Styles.css";

import JobDesc from "./JobDesc";
import UserData from "./UserData";
import ReviewData from "./ReviewData";
import Applied from "./Applied";

const Index = () => {
  const { jobId } = useParams();

  const [job, setJob] = useState({});
  const getJob = async () => {
    try {
      const { data } = await api.get(`/employee/jobbyid/${jobId}`);
      setJob(data.job);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getJob();
  }, []);
  return (
    <div class="jobsapplysec marginframe">
      {/* <Applied /> */}
      <div className="row">
        <div className="col-lg-6 px-2">
          <UserData />
          {/* <ReviewData /> */}
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 px-2">
          <JobDesc job={job} />
        </div>
      </div>
    </div>
  );
};

export default Index;
