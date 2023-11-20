import React from "react";

const ReviewData = () => {
  return (
    <div className="reviewdata">
      <h6 className="heading">Review Application</h6>
      <div className="contactinfo">
        <div className="d-flex justify-content-between">
          <p>Contact information</p>
          <p>Edit</p>
        </div>
        <div className="atextbox my-2 detail">
          <div className="py-2">
            <h5>Full Name</h5>
            <h6>Amit Kumar</h6>
          </div>
          <div className="py-2">
            <h5>Email</h5>
            <h6>amit.kumar@gmail.com</h6>
          </div>
          <div className="py-2">
            <h5>City, State</h5>
            <h6>Delhi, India</h6>
          </div>
          <div className="py-2">
            <h5>Phone Number</h5>
            <h6>+91 9876543210</h6>
          </div>
        </div>
      </div>
      <div className="resumesec mt-4">
        <div className="d-flex justify-content-between">
          <p>Resume</p>
          <p>Edit</p>
        </div>
        <div className="atextbox px-5 py-3">
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
          </div>
        </div>
      </div>
      <div className="qnasec mt-4">
        <div className="d-flex justify-content-between">
          <p>Employer questions</p>
          <p>Edit</p>
        </div>
        <div className="atextbox my-2 detail">
          <div className="py-2">
            <h5>What is the highest level of education you have completed?</h5>
            <h6>Master's Degree</h6>
          </div>
          <div className="py-2">
            <h5>How many years of total work experience do you have?</h5>
            <h6>2</h6>
          </div>
          <div className="py-2">
            <h5>
              Please list 2-3 dates and time ranges that you could do an
              interview.(optional)
            </h5>
            <h6>28 Feb 2023</h6>
          </div>
        </div>
      </div>
      <div className="docsec mt-4">
        <div className="d-flex justify-content-between">
          <p>Documents</p>
        </div>
        <div className="atextbox px-5 py-3">
          <div className="d-flex align-items-center">
            <div className="fileion d-flex justify-content-center align-items-center">
              <i class="fa-regular fa-file-lines txt-blue"></i>
            </div>
            <div className="ms-3">
              <h5 class="resumename txt-blue">Upload Document</h5>
              <h6 class="resumeupload">
                No cover letter or additional documents included (optional)
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="termssec mt-4">
        <p>
          By pressing apply: <br />
          1) you agree to our Terms, Cookie & Privacy Policies. <br />
          2) you consent to your application being transmitted to the Employer
          (Indeed does not guarantee receipt), & processed & analyzed in
          accordance with its & Indeed's terms & privacy policies. <br />
          3) you acknowledge that when you apply to jobs outside your country it
          may involve you sending your personal data to countries with lower
          levels of data protection.
        </p>
      </div>
      <div className="btnsec mt-4">
        <button className="mybtn btn-blue">Submit your application</button>
      </div>
    </div>
  );
};

export default ReviewData;
