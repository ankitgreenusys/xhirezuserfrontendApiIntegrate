import { useState } from "react";
import api from "../../../utils/api";
import { useNavigate } from "react-router-dom";

const FullReg = ({ userId }) => {
  const navigate = useNavigate();

  const [jTitle, setJTitle] = useState("");
  const [cEmployer, setCEmployer] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eduLvl, setEduLvl] = useState("");
  const [eduInst, setEduInst] = useState("");
  const [fieldStudy, setFieldStudy] = useState("");
  const [grade, setGrade] = useState("");
  const [edStart, setEdStart] = useState("");
  const [edEnd, setEdEnd] = useState("");
  const [skills, setSkills] = useState("");
  const [industry, setIndustry] = useState("");
  const [jType, setJType] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState({
    start: "",
    end: "",
  });

  const saveReg = async () => {
    try {
      const { data } = await api.post(
        `/employee/registrationAdditional/${userId}`,
        {
          currentJob: jTitle,
          currentEmployer: cEmployer,
          workingExperience: {
            startDate,
            endDate,
          },
          education: {
            educationalLevel: eduLvl,
            institution: eduInst,
            fieldOfStudy: fieldStudy,
            grade: +grade,
            startYear: edStart,
            endYear: edEnd,
          },
          skills: skills.split(","),
          industry: industry,
          jobType: jType,
          location: location,
          salary: {
            start: +salary.start,
            end: +salary.end,
          },
        }
      );
      console.log(data);
      navigate("/candidatelogin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fulreg">
      <div className="d-flex flex-column align-items-center my-5">
        <h2 className="mb-4">Registration</h2>
        <div className="atextbox w-75">
          <div class="row">
            <div className="col-md-12 my-2">
              <label htmlFor="jTitle" className="m-2">
                Current job title
              </label>
              <input
                type="text"
                name="jTitle"
                id="jTitle"
                className="form-control"
                placeholder="Enter Current job title"
                value={jTitle}
                onChange={(e) => setJTitle(e.target.value)}
              />
            </div>
            <div className="col-md-12 my-2">
              <label htmlFor="cEmployer" className="m-2">
                Current employer
              </label>
              <input
                type="text"
                name="cEmployer"
                id="cEmployer"
                className="form-control"
                placeholder="Enter Current employer"
                value={cEmployer}
                onChange={(e) => setCEmployer(e.target.value)}
              />
            </div>

            <div className="col-md-7 my-2">
              <label htmlFor="" className="m-2">
                Work experience
              </label>
              <div className="d-flex">
                <div className="w-100 me-3">
                  <p className="smalltxt m-2">Start date</p>
                  <input
                    type="date"
                    name="start-date"
                    id="start-date"
                    className="form-control"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div className="w-100">
                  <p className="smalltxt m-2">End date</p>
                  <input
                    type="date"
                    name="end-date"
                    id="end-date"
                    className="form-control"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <label htmlFor="" className="m-2 mt-4">
              Educational details
            </label>
            <div className="col-md-12 my-2">
              <label htmlFor="eduLvl" className="m-2">
                Educational level
              </label>
              <input
                type="text"
                name="eduLvl"
                id="eduLvl"
                className="form-control"
                placeholder="Enter Education Level"
                value={eduLvl}
                onChange={(e) => setEduLvl(e.target.value)}
              />
            </div>
            <div className="col-md-12 my-2">
              <label htmlFor="eduInst" className="m-2">
                Institution
              </label>
              <input
                type="tel"
                name="eduInst"
                id="eduInst"
                className="form-control"
                placeholder="Enter Institution"
                value={eduInst}
                onChange={(e) => setEduInst(e.target.value)}
              />
            </div>

            <div className="col-md-6 my-2">
              <label htmlFor="city" className="m-2">
                Field of Study
              </label>
              <input
                type="text"
                name="field-study"
                id="field-study"
                className="form-control"
                placeholder="Enter Field of Study"
                value={fieldStudy}
                onChange={(e) => setFieldStudy(e.target.value)}
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="grade" className="m-2">
                Grade
              </label>
              <input
                type="number"
                name="grade"
                id="grade"
                className="form-control"
                placeholder="Enter Grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                min={0}
                max={100}
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="edStart" className="m-2">
                Start Year
              </label>
              <input
                type="number"
                name="edStart"
                id="edStart"
                className="form-control"
                placeholder="Enter start date"
                value={edStart}
                onChange={(e) => setEdStart(e.target.value)}
                min={1950}
                max={2050}
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="edEnd" className="m-2">
                End Year
              </label>
              <input
                type="number"
                name="edEnd"
                id="edEnd"
                className="form-control"
                placeholder="Enter end date"
                value={edEnd}
                onChange={(e) => setEdEnd(e.target.value)}
                min={1950}
                max={2050}
              />
            </div>
            <p className="smalltxt mt-4 mb-2">+ Add More</p>
            <div className=" my-2">
              <label htmlFor="address" className="m-2">
                Skiils
              </label>
              <textarea
                name="skills"
                id="skills"
                rows="3"
                className="form-control"
                placeholder="Enter Skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="industry" className="m-2">
                Industry
              </label>
              <input
                type="text"
                name="industry"
                id="industry"
                className="form-control"
                placeholder="Enter Industry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="jType" className="m-2">
                Job type
              </label>
              <select
                name="jType"
                id="jType"
                className="form-control"
                value={jType}
                onChange={(e) => setJType(e.target.value)}
              >
                <option value="full time">Full Time</option>
                <option value="part time">Part Time</option>
                <option value="contract">Contract</option>
              </select>
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="location" className="m-2">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="form-control"
                placeholder="Enter Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="salary" className="m-2">
                Salary
              </label>
              <input
                type="number"
                min={0}
                name="salarystart"
                id="salarystart"
                className="form-control"
                placeholder="Enter Salary Start"
                value={salary.start}
                onChange={(e) =>
                  setSalary({
                    ...salary,
                    start: e.target.value,
                  })
                }
              />
              <input
                type="number"
                min={0}
                name="salaryend"
                id="salaryend"
                className="form-control"
                placeholder="Enter Salary End"
                value={salary.end}
                onChange={(e) =>
                  setSalary({
                    ...salary,
                    end: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn btn-primary my-4" onClick={saveReg}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullReg;
