import React from "react";

const Interveiw = () => {
  return (
    <div class="intrvtab mt-3">
      <div className="catehead">Upcoming interviews</div>
      <div className="listup">
        <div className="atextbox py-3 listitem">
          <div className="intvdat txt-blue">20 Feb 2013</div>
          <hr />
          <div className="namesec">UI Designer</div>
          <div className="smalldet mt-1 ">
            <span class="cmpy txt-blue">Microsoft Pvt. Ltd.</span>
            <span className="ms-3">
              <i class="fa-solid fa-location-dot"></i>
              <span class="ms-1 txt-muted">Delhi, India</span>
            </span>
          </div>
          <div className="intvdet">
            <div className="intvtime my-2">
              <i class="fa-solid fa-clock me-2"></i> 1:00 PM - 1:30 PM GMT+5:30
            </div>
            <div className="intvmode my-2">
              <i class="fa-solid fa-video me-2"></i> Video interview on given
              link
            </div>
          </div>
          <div className="intvbtn mt-4">
            <button className="mybtn btn-blue me-3">Open Link</button>
            <button className="mybtn btn-blue">Copy Link</button>
          </div>
        </div>
      </div>
      <div className="catehead">Past interviews</div>
      <div className="listup">
        <div className="atextbox py-3 listitem">
          <div className="intvdat txt-blue">20 Feb 2013</div>
          <hr />
          <div className="namesec">UI Designer</div>
          <div className="smalldet mt-1 ">
            <span class="cmpy txt-blue">Microsoft Pvt. Ltd.</span>
            <span className="ms-3">
              <i class="fa-solid fa-location-dot"></i>
              <span class="ms-1 txt-muted">Delhi, India</span>
            </span>
          </div>
          <div className="intvdet">
            <div className="intvtime my-2">
              <i class="fa-solid fa-clock me-2"></i> 1:00 PM - 1:30 PM GMT+5:30
            </div>
            <div className="intvmode my-2">
              <i class="fa-solid fa-video me-2"></i> Video interview on given
              link
            </div>
          </div>
        </div>
      </div>
      <div className="catehead">Cancel interviews</div>
      <div className="listup">
        <div className="atextbox py-3 listitem">
          <div className="intvdat txt-blue">20 Feb 2013</div>
          <hr />
          <div className="namesec">UI Designer</div>
          <div className="smalldet mt-1 ">
            <span class="cmpy txt-blue">Microsoft Pvt. Ltd.</span>
            <span className="ms-3">
              <i class="fa-solid fa-location-dot"></i>
              <span class="ms-1 txt-muted">Delhi, India</span>
            </span>
          </div>
          <div className="intvdet">
            <div className="intvtime my-2">
              <i class="fa-solid fa-clock me-2"></i> 1:00 PM - 1:30 PM GMT+5:30
            </div>
            <div className="intvmode my-2">
              <i class="fa-solid fa-video me-2"></i> Video interview on given
              link
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interveiw;
