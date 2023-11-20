import React from "react";

const Form3 = () => {
  return (
    <div className="form3 my-2 mb-4">
      <div className="mt-4">
        <label htmlFor="presonnumb" className="form-label">
          Let applicants call you directly{" "}
          <span className="txt-muted">(Optional)</span>
          <p className="txt-muted mb-1">
            By providing your phone number you agree that Job Seekers can call
            you at this number for information regarding this job post.
          </p>
        </label>
        <div className="row">
          <div className="col-md-4">
            <input
              type="number"
              className="form-control"
              id="presonnumb"
              placeholder="Enter Phone Number"
              max={9999999999}
              min={1000000000}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="exper" className="form-label">
          Would you like to applicants to submit a resume?
        </label>
        <div className="row">
          <div className="col-md-8">
            <div className="d-flex justify-content-between">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="resumeneeded"
                  id="resumeyes"
                />
                <label class="form-check-label" for="resumeyes">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="resumeneeded"
                  id="resumeNo"
                />
                <label class="form-check-label" for="resumeNo">
                  No
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="resumeneeded"
                  id="resumeOptional"
                />
                <label class="form-check-label" for="resumeOptional">
                  Optional
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="exper" className="form-label">
          Is there any application deadline?
        </label>
        <div className="row">
          <div className="col-md-8">
            <div className="d-flex justify-content-between">
              <div class="form-check d-flex align-items-center">
                <input
                  class="form-check-input me-2"
                  type="radio"
                  name="setdeadline"
                  id="deadlineYes"
                />
                <label class="form-check-label me-2" for="resumeyes">
                  Yes
                </label>
                <input type="date" className="form-control d-inline   " />
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="setdeadline"
                  id="deadlineNo"
                />
                <label class="form-check-label" for="resumeNo">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h4 className="">Other Settings</h4>
        <label htmlFor="updatesema" className="form-label">
          Send daily updates about the job and applications to:
        </label>
        <div className="row">
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              id="updatesema"
              placeholder="Enter Email Address"
            />
            <p className="my-2 txt-blue">
              <i class="fa-solid fa-plus"></i> Add Email
            </p>
          </div>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="reciveupdt" />
          <label class="form-check-label txt-muted" for="reciveupdt">
            Also send an individual email update each time someone applies
          </label>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="jobdesc" className="form-label">
          Do you want to let candidates who apply for your job start the
          conversation?
          <p className="txt-muted mb-1">
            Allow candidates to contact you about their applications.Messages
            will be sent to the same email address you provided for daily
            updates.
          </p>
        </label>
        <div className="row mb-5">
          <div className="col-md-8">
            <div className="d-flex justify-content-between">
              <div class="form-check d-flex align-items-center">
                <input
                  class="form-check-input me-2"
                  type="radio"
                  name="startconv"
                  id="convoYes"
                />
                <label class="form-check-label me-2" for="resumeyes">
                  Yes
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="startconv"
                  id="convoNo"
                />
                <label class="form-check-label" for="resumeNo">
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form3;
