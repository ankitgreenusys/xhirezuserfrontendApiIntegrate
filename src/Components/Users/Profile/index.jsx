import React from "react";
import "./Styles.css";

import UserPic from "../../../assets/images/userpic.jpg";

const Index = () => {
  return (
    <div className="profilesec marginframe">
      <h1>Your Profile</h1>
      <div className="dividehr"></div>
      <div className="profiledetails">
        <div className="atextbox my-3 basicdetail">
          <div className="d-flex justify-content-between align-items-center">
            <div className="topic"></div>
            <div className="editbtn txt-blue">
              <i class="fa-solid fa-pen me-2"></i> Edit
            </div>
          </div>
          <div className="d-flex detarea">
            <div className="imgsec">
              <img src={UserPic} alt="userpic" />
            </div>
            <div className="detdata">
              <h2>Rahul Kumar</h2>
              <h5>
                <i class="fa-solid fa-briefcase me-3"></i>Java Developer at IIMS
              </h5>
              <h5>
                <i class="fa-solid fa-location-dot me-3"></i>Noida, India
              </h5>
              <h5>
                <i class="fa-solid fa-envelope me-3"></i>gautam.rt13@gmail.com
              </h5>
              <h5>
                <i class="fa-solid fa-phone me-3"></i>+91 9876543210
              </h5>
            </div>
          </div>
        </div>
        <div className="atextbox my-3">
          <div className="d-flex justify-content-between align-items-center">
            <div className="topic txt-blue">| Senior Java Developer</div>
            <div className="editbtn"></div>
          </div>
        </div>
        <div className="atextbox my-3 keyskills">
          <div className="d-flex justify-content-between align-items-center">
            <div className="topic">| Keyskills</div>
            <div className="editbtn txt-blue">
              <i class="fa-solid fa-pen me-2"></i> Edit
            </div>
          </div>
          <div className="d-flex keywords">
            <div className="keyword">
              Java<i class="fa-solid fa-xmark ms-3"></i>
            </div>
            <div className="keyword">
              Java Developer<i class="fa-solid fa-xmark ms-3"></i>
            </div>
            <div className="keyword">
              AngularJS<i class="fa-solid fa-xmark ms-3"></i>
            </div>
          </div>
        </div>
        <div className="atextbox my-3 workexpdet">
          <div className="d-flex justify-content-between align-items-center">
            <div className="topic">| Work experience</div>
            <div className="editbtn txt-blue">
              <i class="fa-solid fa-pen me-2"></i> Edit
            </div>
          </div>
          <div className="workexps">
            <div className="workexp d-flex align-items-center">
              <div className="icon">
                <i class="fa-solid fa-suitcase"></i>
              </div>
              <div className="details">
                <div className="degina">
                  Java Developer at ifms gov Rajasthan
                </div>
                <div className="duration">Jun 22 to till date</div>
              </div>
            </div>
            <div className="workexp d-flex align-items-center">
              <div className="icon">
                <i class="fa-solid fa-suitcase"></i>
              </div>
              <div className="details">
                <div className="degina">
                  Java Developer at Kangaroo Pvt. Ltd
                </div>
                <div className="duration">Sep’16 to Jun’ 22</div>
              </div>
            </div>
          </div>
        </div>
        <div className="atextbox my-3 projectarea">
          <div className="d-flex justify-content-between align-items-center">
            <div className="topic">| Projects</div>
            <div className="editbtn txt-blue">
              <i class="fa-solid fa-pen me-2"></i> Edit
            </div>
          </div>
          <div className="projects">
            <div className="project my-3">
              <div className="ptitle d-flex justify-content-between">
                <div>Project name</div>
                <span>Sep'16 to Jun' 22</span>
              </div>
              <div className="pdetails">Om Jewellery System</div>
              <div className="ptitle">Organization/ Company Name</div>
              <div className="pdetails">Greenusys Pvt. Ltd</div>
              <div className="ptitle">Skills</div>
              <div className="pdetails">J2Ee, J2Se</div>
              <div className="ptitle">Role Description</div>
              <div className="pdetails">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </div>
              <div className="ptitle">Project Description</div>
              <div className="pdetails">
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </div>
            </div>
          </div>
        </div>
        <div className="atextbox my-3 workexpdet">
          <div className="d-flex justify-content-between align-items-center">
            <div className="topic">| Education</div>
            <div className="editbtn txt-blue">
              <i class="fa-solid fa-pen me-2"></i> Edit
            </div>
          </div>
          <div className="workexps">
            <div className="workexp d-flex align-items-center">
              <div className="icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="details">
                <div className="degina">BCA, Computers, 2010</div>
                <div className="duration">Bhopal University - UG Education</div>
              </div>
            </div>
            <div className="workexp d-flex align-items-center">
              <div className="icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="details">
                <div className="degina">MCA, Computers, 2012</div>
                <div className="duration">Punjab University - PG Education</div>
              </div>
            </div>
            <div className="workexp d-flex align-items-center">
              <div className="icon">
                <i class="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="details">
                <div className="degina">No.ptu, 2012</div>
                <div className="duration">
                  Punjab University - PPG Education
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="atextbox my-3 workexpdet">
          <div className="d-flex justify-content-between align-items-center">
            <div className="topic">| Certification</div>
            <div className="editbtn txt-blue">
              <i class="fa-solid fa-pen me-2"></i> Edit
            </div>
          </div>
          <div className="workexps">
            <div className="workexp d-flex align-items-center">
              <div className="icon">
                <i class="fa-solid fa-certificate"></i>
              </div>
              <div className="details">
                <div className="degina">Computer Engineering</div>
                <div className="duration">2010</div>
              </div>
            </div>
          </div>
        </div>
        <div className="atextbox my-3 otherdetarea">
          <div className="d-flex justify-content-between align-items-center">
            <div className="topic">| Other Details</div>
            <div className="editbtn txt-blue">
              <i class="fa-solid fa-pen me-2"></i> Edit
            </div>
          </div>
          <div className="othdets">
            <div className="othdet">
              <div className="odtitle">Language Known</div>
              <div className="oddetails">English - Proficient</div>
              <div className="oddetails">Hindi - Proficient</div>
            </div>
            <div className="othdet">
              <div className="odtitle">Personal Details</div>
              <div className="oddetails">Date of Birth - 13/08/1990</div>
              <div className="oddetails">Gender - male</div>
              <div className="oddetails">Marital Status - Single</div>
              <div className="oddetails">Category - Schedule Caste (SC)</div>
              <div className="oddetails">Physical Challenged - No</div>
            </div>
            <div className="othdet">
              <div className="odtitle">Contact Details</div>
              <div className="oddetails">West Vinod Nagar, Delhi - 110092</div>
              <div className="oddetails">Phone - +91 68468 984571</div>
              <div className="oddetails">Email - raj.mian123@gmail.com</div>
            </div>
            <div className="othdet">
              <div className="odtitle">Desired Job Details</div>
              <div className="oddetails">Industry - Information Technology</div>
              <div className="oddetails">Job type - Permanent</div>
              <div className="oddetails">Employment status - Full time</div>
            </div>
            <div className="othdet">
              <div className="odtitle">Salary Expectation</div>
              <div className="oddetails">10K - 25K INR</div>
            </div>
            <div className="othdet">
              <div className="odtitle">Work Authorization</div>
              <div className="oddetails">Other Countries Status - India</div>
            </div>
          </div>
        </div>
        <div className="atextbox my-3 attcvarea">
          <div className="d-flex justify-content-between align-items-center">
            <div className="topic">
              <div className="">| Attached CV</div>
              <span>Last updated on 11 Aug 2022</span>
            </div>
            <div className="editbtn txt-blue"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
