import { useState } from "react";

const Filter = () => {
  const [filter, setFilter] = useState({
    sortby: "Last24",
    exp: "exp0",
    loc: "locall",
    sal: "sal1",
    job: "jobfull",
    edu: "edu1",
  });
  return (
    <div className="jobfilter">
      <div className="atextbox w-100 d-flex justify-content-between">
        <div className="">Job Filter</div>
        <div
          className=""
          onClick={() => {
            setFilter({
              sortby: "Last24",
              exp: "exp0",
              loc: "locall",
              sal: "sal1",
              job: "jobfull",
              edu: "edu1",
            });
          }}
        >
          clear all
        </div>
      </div>
      <div className="atextbox filtype">
        <div className="txt-blue filtitle">Sort by</div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="Last24">Last 24 hours</label>
          <input
            type="checkbox"
            name="Last24"
            id="Last24"
            checked={filter.sortby === "Last24"}
            onChange={() => {
              setFilter({ ...filter, sortby: "Last24" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="Last3">Last 3 days</label>
          <input
            type="checkbox"
            name="Last3"
            id="Last3"
            checked={filter.sortby === "Last3"}
            onChange={() => {
              setFilter({ ...filter, sortby: "Last3" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="Last7">Last 7 days</label>
          <input
            type="checkbox"
            name="Last7"
            id="Last7"
            checked={filter.sortby === "Last7"}
            onChange={() => {
              setFilter({ ...filter, sortby: "Last7" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="Last30">Last 30 days</label>
          <input
            type="checkbox"
            name="Last30"
            id="Last30"
            checked={filter.sortby === "Last30"}
            onChange={() => {
              setFilter({ ...filter, sortby: "Last30" });
            }}
          />
        </div>
      </div>
      <div className="atextbox filtype">
        <div className="txt-blue filtitle">Experiences</div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="exp0">Fresher</label>
          <input
            type="checkbox"
            name="exp0"
            id="exp0"
            checked={filter.exp === "exp0"}
            onChange={() => {
              setFilter({ ...filter, exp: "exp0" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="exp1">1+ year experience</label>
          <input
            type="checkbox"
            name="exp1"
            id="exp1"
            checked={filter.exp === "exp1"}
            onChange={() => {
              setFilter({ ...filter, exp: "exp1" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="exp2">2+ years experience</label>
          <input
            type="checkbox"
            name="exp2"
            id="exp2"
            checked={filter.exp === "exp2"}
            onChange={() => {
              setFilter({ ...filter, exp: "exp2" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="exp3">3+ years experience</label>
          <input
            type="checkbox"
            name="exp3"
            id="exp3"
            checked={filter.exp === "exp3"}
            onChange={() => {
              setFilter({ ...filter, exp: "exp3" });
            }}
          />
        </div>
      </div>
      <div className="atextbox filtype">
        <div className="txt-blue filtitle">Location</div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="locall">All location</label>
          <input
            type="checkbox"
            name="locall"
            id="locall"
            checked={filter.loc === "locall"}
            onChange={() => {
              setFilter({ ...filter, loc: "locall" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="loc1">Noida, Uttar Pradesh</label>
          <input
            type="checkbox"
            name="loc1"
            id="loc1"
            checked={filter.loc === "loc1"}
            onChange={() => {
              setFilter({ ...filter, loc: "loc1" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="loc2">Gurgoan</label>
          <input
            type="checkbox"
            name="loc2"
            id="loc2"
            checked={filter.loc === "loc2"}
            onChange={() => {
              setFilter({ ...filter, loc: "loc2" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="loc3">New Delhi</label>
          <input
            type="checkbox"
            name="loc3"
            id="loc3"
            checked={filter.loc === "loc3"}
            onChange={() => {
              setFilter({ ...filter, loc: "loc3" });
            }}
          />
        </div>
        <span className="txt-muted">More</span>
      </div>
      <div className="atextbox filtype">
        <div className="txt-blue filtitle">Salary Estimate</div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="sal1">{"> 1,00,000 PA"}</label>
          <input
            type="checkbox"
            name="sal1"
            id="sal1"
            checked={filter.sal === "sal1"}
            onChange={() => {
              setFilter({ ...filter, sal: "sal1" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="sal2">1,00,000 - 2,00,000 PA</label>
          <input
            type="checkbox"
            name="sal2"
            id="sal2"
            checked={filter.sal === "sal2"}
            onChange={() => {
              setFilter({ ...filter, sal: "sal2" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="sal3">2,00,000 - 3,00,000 PA</label>
          <input
            type="checkbox"
            name="sal3"
            id="sal3"
            checked={filter.sal === "sal3"}
            onChange={() => {
              setFilter({ ...filter, sal: "sal3" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="sal4">{"< 3,00,000 PA"}</label>
          <input
            type="checkbox"
            name="sal4"
            id="sal4"
            checked={filter.sal === "sal4"}
            onChange={() => {
              setFilter({ ...filter, sal: "sal4" });
            }}
          />
        </div>
      </div>
      <div className="atextbox filtype">
        <div className="txt-blue filtitle">Job type</div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="jobfull">Full time</label>
          <input
            type="checkbox"
            name="jobfull"
            id="jobfull"
            checked={filter.job === "jobfull"}
            onChange={() => {
              setFilter({ ...filter, job: "jobfull" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="jobpart">Part time</label>
          <input
            type="checkbox"
            name="jobpart"
            id="jobpart"
            checked={filter.job === "jobpart"}
            onChange={() => {
              setFilter({ ...filter, job: "jobpart" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="jobintern">Internship</label>
          <input
            type="checkbox"
            name="jobintern"
            id="jobintern"
            checked={filter.job === "jobintern"}
            onChange={() => {
              setFilter({ ...filter, job: "jobintern" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="jobcontract">Contract</label>
          <input
            type="checkbox"
            name="jobcontract"
            id="jobcontract"
            checked={filter.job === "jobcontract"}
            onChange={() => {
              setFilter({ ...filter, job: "jobcontract" });
            }}
          />
        </div>
      </div>
      <div className="atextbox filtype">
        <div className="txt-blue filtitle">Education level</div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="edu1">Diploma</label>
          <input
            type="checkbox"
            name="edu1"
            id="edu1"
            checked={filter.edu === "edu1"}
            onChange={() => {
              setFilter({ ...filter, edu: "edu1" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="edu2">Bachelor's degree</label>
          <input
            type="checkbox"
            name="edu2"
            id="edu2"
            checked={filter.edu === "edu2"}
            onChange={() => {
              setFilter({ ...filter, edu: "edu2" });
            }}
          />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="edu3">Master's degree</label>
          <input
            type="checkbox"
            name="edu3"
            id="edu3"
            checked={filter.edu === "edu3"}
            onChange={() => {
              setFilter({ ...filter, edu: "edu3" });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
