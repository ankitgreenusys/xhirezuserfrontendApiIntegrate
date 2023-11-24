import React from "react";

const JobDesc = ({ job }) => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="jobdescsec sticky-top">
      <div className="atextbox atextboxborder fix">
        <div className="title d-flex justify-content-between align-items-center">
          <h5 className="">{job.jobTitle || job.title}</h5>
          <span className="ms-4">
            <i class="fa-regular fa-bookmark bookmarkicon"></i>
          </span>
        </div>
        <div className="smalldet mt-2 txt-muted">
          <span class="">{job.company}</span>
          <span className="ms-3">
            <i class="fa-solid fa-location-dot txt-black"></i>
            <span class="ms-1">
              {job.city}, {job.state}
            </span>
          </span>
        </div>
        <div className="smalldet mt-2 txt-muted">
          <span className="">
            <i class="fa-solid fa-briefcase txt-black"></i>
            <span className="ms-1">
              {job?.experience?.min}-{job?.experience?.max} Years
            </span>
          </span>
          <span className="ms-3">
            <i class="fa-solid fa-money-bills txt-black"></i>
            <span className="ms-1">
              {job?.pay?.min} - {job?.pay?.max} PM
            </span>
          </span>
        </div>
        <hr />
        <div className="jobdescr">
          <div className="">
            <h6 className="heading">Full Job Description</h6>
            {job?.description?.map((desc) => (
              <p>{desc}</p>
            ))}
            <p>
              Experience: {job?.experience?.min}-{job?.experience?.max} Years
            </p>
            <p>
              Salary: {job?.pay?.min} - {job?.pay?.max} PM
            </p>
          </div>
          {!show ? (
            <div class="txt-blue cursor-pointer" onClick={() => setShow(true)}>
              View full description <i class="fa-solid fa-chevron-down"></i>
            </div>
          ) : (
            <>
              <div className="">
                <h6 className="heading">Responsibilities</h6>
                <ul>
                  {job?.responsiblities?.map((resp) => (
                    <li>
                      <p class="mb-0">{resp}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h6 className="heading">Job type</h6>
                <ul>
                  {job?.jobType?.map((type) => (
                    <li>
                      <p class="mb-0">{type}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h6 className="heading">Job schedule</h6>
                <ul>
                  {job?.jobSchedule?.map((schedule) => (
                    <li>
                      <p class="mb-0">{schedule}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                class="txt-blue cursor-pointer"
                onClick={() => setShow(false)}
              >
                Hide full description <i class="fa-solid fa-chevron-up"></i>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDesc;
