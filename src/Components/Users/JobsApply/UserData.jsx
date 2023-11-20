import React from "react";

const UserData = () => {
  return (
    <div className="jobques">
      <div className="resumesec">
        <h6 className="heading">Add resume for the employer</h6>
        <div className="atextbox px-4 py-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="fileion d-flex justify-content-center align-items-center">
                <i class="fa-regular fa-file-lines txt-blue"></i>
              </div>
              <div className="ms-3">
                <h5 class="resumename txt-blue">Amit Kumar Resume.pdf</h5>
                <h6 class="resumeupload">uploaded three week ago</h6>
              </div>
            </div>
            <div className="checkicon">
              <i class="fa-solid fa-circle-check txt-blue"></i>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button className="mybtn uploadbtn">
            <i class="fa-solid fa-arrow-up-from-bracket me-2"></i> Replace
          </button>
        </div>
      </div>
      <div className="qnasec">
        <h6 className="heading">Answer the following questions</h6>
        <div className="ques">
          <p>
            Will you be able to reliably commute or relocate to Gautam Budh
            Nagar, Uttar Pradesh for this job?
          </p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ques1"
              id="YesCommute"
            />
            <label className="" for="YesCommute">
              Yes, I can make the commute
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ques1"
              id="YesRelocate"
            />
            <label className="" for="YesRelocate">
              Yes, I am planning to relocate
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ques1"
              id="YesRelocateAssistance"
            />
            <label className="" for="YesRelocateAssistance">
              Yes, but I need relocation assistance
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ques1"
              id="No"
            />
            <label className="" for="No">
              No
            </label>
          </div>
        </div>
        <div className="ques">
          <p>What is the highest level of education you have completed?</p>
          <select className="form-select w-75">
            <option selected hidden>
              Select
            </option>
            <option value="1">High School</option>
            <option value="2">Diploma</option>
            <option value="3">Bachelor's Degree</option>
            <option value="4">Master's Degree</option>
            <option value="5">Doctorate</option>
          </select>
        </div>
        <div className="ques">
          <p>How many years of total work experience do you have?</p>
          <input type="text" className="form-control w-50" />
        </div>
        <div className="ques">
          <p>How many years of UI design experience do you have?</p>
          <input type="text" className="form-control w-50" />
        </div>
        <div className="ques">
          <p>
            Please list 2-3 dates and time ranges that you could do an
            interview.(optional)
          </p>
          <textarea className="form-control w-75" rows="3"></textarea>
        </div>

        <button class=" mt-4 mybtn btn-blue">Submit</button>
      </div>
    </div>
  );
};

export default UserData;
