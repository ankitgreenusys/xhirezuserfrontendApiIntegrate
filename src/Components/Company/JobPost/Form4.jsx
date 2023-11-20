import React from "react";

const Form4 = () => {
  return (
    <div className="form4 my-2 mb-4">
      <div className="my-4">
        <label htmlFor="empassit" className="form-label">
          Employee Assist
          <p className="my-1">
            If I don't show interest, automatically decline each candidate
            after:
          </p>
        </label>
        <div className="row">
          <div className="col-md-4">
            <select id="empassit" className="form-select">
              <option selected hidden>
                Choose...
              </option>
              <option>1 Day</option>
              <option>3 Days</option>
              <option>7 Days</option>
              <option>14 Days</option>
            </select>
          </div>
        </div>
        <p className="txt-blue ms-2 mt-1">
          view message to declined candidates
        </p>
      </div>
      <div className="mt-4">
        <label htmlFor="" className="form-label">
          Recruitment
        </label>
        <div className="salary">
          <div className="row">
            <label htmlFor="openhere" className="form-label">
              How many people do you want to here for this opening?
            </label>
            <div className="col-md-8">
              <select name="openhere" className="form-select">
                <option selected hidden>
                  Choose...
                </option>
                <option>50</option>
                <option>100</option>
                <option>150</option>
                <option>200</option>
              </select>
            </div>
            <label htmlFor="quickhire" className="form-label mt-4">
              How quickly do you need to hire?
            </label>
            <div className="col-md-8">
              <select name="quickhire" className="form-select">
                <option selected hidden>
                  Choose...
                </option>
                <option>Immediately</option>
                <option>Within a week</option>
                <option>Within a month</option>
                <option>Within 3 months</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="jobdesc" className="form-label">
          Add Questions and Skill test
        </label>
        <div className="chipcheck">
          <ul class="ks-cboxtags">
            <li>
              <input
                type="checkbox"
                id="abilcomre"
                value="Ability to commute/relocate"
              />
              <label for="abilcomre">Ability to commute/relocate</label>
            </li>
            <li>
              <input type="checkbox" id="educrequire" value="Education" />
              <label for="educrequire">Education</label>
            </li>
            <li>
              <input type="checkbox" id="workexp" value="Work Experience" />
              <label for="workexp">Work Experience</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="interavail"
                value="Interview availability"
              />
              <label for="interavail">Language</label>
            </li>
            <li>
              <input type="checkbox" id="lang" value="Language" />
              <label for="lang">Language</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <div className="atextboxborder">
          <div className="detopheader pb-0 m-0">
            <h5 className="mb-0">
              Will you be able to reliably communte or relocate to Delhi, Delhi
              for this job?
            </h5>
            <span>
              <i class="fa-solid fa-xmark fa-xl"></i>
            </span>
          </div>
          <hr />
          <div className="ps-3 pb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="comuuteradio"
                id="commuteyes"
              />
              <label class="form-check-label" for="commuteyes">
                Reliably commute or planning to relocate before starting work
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="comuuteradio"
                id="commuteno"
              />
              <label class="form-check-label" for="commuteno">
                Reliably commute or willing to relocate with an
                employer-provided relocation package
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form4;
