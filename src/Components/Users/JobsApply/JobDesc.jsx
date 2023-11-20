import React from "react";

const JobDesc = () => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="jobdescsec sticky-top">
      <div className="atextbox atextboxborder fix">
        <div className="title d-flex justify-content-between align-items-center">
          <h5 className="">UI/UX Designer</h5>
          <span className="ms-4">
            <i class="fa-regular fa-bookmark bookmarkicon"></i>
          </span>
        </div>
        <div className="smalldet mt-2 txt-muted">
          <span class="">Microsoft Pvt. Ltd.</span>
          <span className="ms-3">
            <i class="fa-solid fa-location-dot txt-black"></i>
            <span class="ms-1">Delhi, India</span>
          </span>
        </div>
        <div className="smalldet mt-2 txt-muted">
          <span className="">
            <i class="fa-solid fa-briefcase txt-black"></i>
            <span className="ms-1">5-10 Years</span>
          </span>
          <span className="ms-3">
            <i class="fa-solid fa-money-bills txt-black"></i>
            <span className="ms-1">10,000 - 20,000 PM</span>
          </span>
        </div>
        <hr />
        <div className="jobdescr">
          <div className="">
            <h6 className="heading">Full Job Description</h6>
            <p>
              We're looking for a passionate UI/UX Web/Mobile/Interaction and
              Graphics Designer to create amazing user experiences, products and
              interaction concepts. Design seamless and pixel perfect User
              Interfaces for Web and Mobile Apps (iOS + Android).
            </p>
            <p>
              Company details: VinSol | SnackMagic. Vinsol is now a part of
              Snackmagic. Snackmagic is a Venture Funded New York Headquartered
              Technology company. At Snackmagic, we have an innovative take on
              Corporate Gifting - making it super easy for an organiser to treat
              1 or 10000 people within minutes. The choice of selection rests
              with the gift recipient. So it's a win-win for all.
            </p>
            <p>
              Snackmagic started with only gifting snacks but has now added
              other offerings like Swag and Local specialities to the menu.
            </p>
            <p>Visit vinsol.com | snackmagic.com for more details.</p>
            <p>Experience: 1 - 3 years</p>
            <p>Salary: 6 - 10 LPA</p>
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
                  <li>
                    <p class="mb-0">
                      Communicate with management and engineering teams to
                      understand, measure and estimate a high level project
                      idea.
                    </p>
                  </li>
                  <li>
                    <p class="mb-0">
                      Understand the ecosystem of an idea and take a
                      domain-oriented approach to conceptualize the product and
                      derive innovative directions, visuals and experiences.
                    </p>
                  </li>
                  <li>
                    <p class="mb-0">
                      Communicate with clients to understand their business
                      goals and objectives.
                    </p>
                  </li>
                  <li>
                    <p class="mb-0">
                      Effectively communicate the idea behind design and product
                      concepts to a diverse audience through wireframes,
                      storyboards, user flows, process flows and product maps.
                    </p>
                  </li>
                  <li>
                    <p class="mb-0">
                      Design project and concept specific graphics.
                    </p>
                  </li>
                  <li>
                    <p class="mb-0">
                      Compile designs into thoughtful interactive prototypes
                      over Invision.
                    </p>
                  </li>
                  <li>
                    <p class="mb-0">Conduct an ongoing user research.</p>
                  </li>
                  <li>
                    <p class="mb-0">
                      Collaborate with teams to ensure smooth adoption of
                      designs and delivery of product.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="">
                <h6 className="heading">Job type</h6>
                <ul>
                  <li>
                    <p class="mb-0">Full Time</p>
                  </li>
                  <li>
                    <p class="mb-0">Part Time</p>
                  </li>
                </ul>
              </div>
              <div className="">
                <h6 className="heading">Job schedule</h6>
                <ul>
                  <li>
                    <p class="mb-0">Day Shift</p>
                  </li>
                  <li>
                    <p class="mb-0">Morning Shift</p>
                  </li>
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
