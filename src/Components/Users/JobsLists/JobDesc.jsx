import React from "react";
import { Link } from "react-router-dom";

const JobDesc = ({ activeJob }) => {
  if (activeJob)
    return (
      <div className="jobdescsec sticky-top">
        <div className="atextbox atextboxborder fix overflowscroll">
          <div className="title">{activeJob.jobTitle || activeJob.title}</div>
          <div className="smalldet mt-2 txt-muted">
            <span class="">{activeJob.company}</span>
            <span className="ms-3">
              <i class="fa-solid fa-location-dot txt-black"></i>
              <span class="ms-1">
                {activeJob.city}, {activeJob.state}
              </span>
            </span>
          </div>
          <div className="smalldet mt-2 txt-muted">
            <span className="">
              <i class="fa-solid fa-briefcase txt-black"></i>
              <span className="ms-1">
                {activeJob?.experience?.min}-{activeJob?.experience?.max} Years
              </span>
            </span>
            <span className="ms-3">
              <i class="fa-solid fa-money-bills txt-black"></i>
              <span className="ms-1">
                {activeJob?.pay?.min} - {activeJob?.pay?.max} PM
              </span>
            </span>
          </div>
          <div className="mt-3">
            <Link
              to={`/users/jobs/${activeJob._id}/apply`}
              className="mybtn btn-blue"
            >
              Apply
            </Link>
            <span className="ms-4">
              <i class="fa-regular fa-bookmark"></i>
            </span>
          </div>
          <hr />

          <div className="jobdescr">
            <div className="">
              <h6 className="heading">Full Job Description</h6>
              {activeJob.description.map((desc) => (
                <p>{desc}</p>
              ))}
              <p>
                Experience: {activeJob?.experience?.min}-
                {activeJob?.experience?.max} Years
              </p>
              <p>
                Salary: {activeJob?.pay?.min} - {activeJob?.pay?.max} PM
              </p>
            </div>
            <div className="">
              <h6 className="heading">Responsibilities</h6>
              <ul>
                {activeJob?.responsiblities?.map((resp) => (
                  <li>
                    <p class="mb-0">{resp}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h6 className="heading">Job type</h6>
              <ul>
                {activeJob?.jobType?.map((type) => (
                  <li>
                    <p class="mb-0">{type}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h6 className="heading">Job schedule</h6>
              <ul>
                {activeJob?.jobSchedule?.map((schedule) => (
                  <li>
                    <p class="mb-0">{schedule}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default JobDesc;
