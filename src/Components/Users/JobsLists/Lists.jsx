import { useState, useEffect } from "react";
import api from "../../../utils/api";

const Lists = ({ jTitle, activeJob, setActiveJob }) => {
  const [jobList, setJobList] = useState([]);
  const getJobList = async () => {
    try {
      const { data } = await api.post("/employee/findjob", {
        title: jTitle,
      });
      console.log(data);
      setJobList(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getJobList();
  }, []);

  return (
    <div className="lists mt-3">
      <div className="d-flex justify-content-between listhead">
        <div className="resdel">
          <span>1-20 of {jobList.length}</span>
          <span className="txt-blue ms-2">{jTitle}</span>
        </div>
        <div className="sortdel">
          <label htmlFor="sortby">sort by</label>
          <select className="txt-blue" name="sortby" id="sortby">
            <option value="relevance">relevance</option>
            <option value="date">date</option>
          </select>
        </div>
      </div>

      {jobList.map((job) => (
        <div
          className="listbody my-3 "
          key={job._id}
          onClick={() => {
            setActiveJob(job);
          }}
        >
          <div
            className={
              "atextbox py-3 listitem " +
              (activeJob?._id === job._id ? "atextboxborder" : "cursor-pointer")
            }
          >
            <div className="namesec">
              <div className="d-flex justify-content-between">
                <div className="title">{job.jobTitle || job.title}</div>
                <div className="">
                  <i class="fa-regular fa-bookmark"></i>
                </div>
              </div>
            </div>
            <div className="smalldet mt-1 ">
              <span class="cmpy txt-blue">{job.company}</span>
              <span className="ms-3 ">
                <i class="fa-solid fa-location-dot"></i>
                <span class="ms-1 txt-muted">
                  {job.city}, {job.state}
                </span>
              </span>
            </div>
            <div className="mt-2 jobdescr">
              <p class="mb-0">{job.description[0]}</p>
            </div>
            <div className="jobexp d-flex mt-2">
              <div className="me-2">
                <i class="fa-solid fa-briefcase"></i> {job?.experience?.min}-
                {job?.experience?.max} Years
              </div>
              <div className="ms-2">
                <i class="fa-solid fa-money-bills"></i> {job?.pay?.min} -{" "}
                {job?.pay?.max} PM
              </div>
            </div>
            <div className="d-flex mt-2 boxdesc">
              {job?.jobType?.map((type) => (
                <div className="boxbtn">{type}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lists;
