import React from "react";

const Filter = () => {
  return (
    <div className="jobfilter mt-3">
      <div className="atextbox w-100 d-flex justify-content-between">
        <div className="">Job Filter</div>
        <p className="txt-blue m-0">clear all</p>
      </div>
      <div className="atextbox filtype">
        <div className="txt-blue filtitle">Sort by</div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="PostDate">Apply Date (newest)</label>
          <input type="checkbox" name="PostDate" id="PostDate" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="JobTitle">Apply Date (oldest)</label>
          <input type="checkbox" name="JobTitle" id="JobTitle" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="JobTitle">Alphabetical (A-Z)</label>
          <input type="checkbox" name="JobTitle" id="JobTitle" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="JobTitle">Alphabetical (Z-A)</label>
          <input type="checkbox" name="JobTitle" id="JobTitle" />
        </div>
      </div>
      <div className="atextbox filtype">
        <div className="txt-blue filtitle">Experiences</div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="exp0">Fresher</label>
          <input type="checkbox" name="exp0" id="exp0" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="exp1">1-2 Year</label>
          <input type="checkbox" name="exp1" id="exp1" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="exp2">2-3 Year</label>
          <input type="checkbox" name="exp2" id="exp2" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="exp3">more than 3</label>
          <input type="checkbox" name="exp3" id="exp3" />
        </div>
      </div>
      <div className="atextbox filtype">
        <div className="txt-blue filtitle">Location</div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="locall">All location</label>
          <input type="checkbox" name="locall" id="locall" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="loc1">Noida, Uttar Pradesh</label>
          <input type="checkbox" name="loc1" id="loc1" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="loc2">Gurgoan</label>
          <input type="checkbox" name="loc2" id="loc2" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="loc3">New Delhi</label>
          <input type="checkbox" name="loc3" id="loc3" />
        </div>
      </div>
      <div className="atextbox filtype">
        <div className="txt-blue filtitle">Skills</div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="sal1">Mobile App Developer</label>
          <input type="checkbox" name="sal1" id="sal1" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="sal2">Php</label>
          <input type="checkbox" name="sal2" id="sal2" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="sal3">Ux Designer</label>
          <input type="checkbox" name="sal3" id="sal3" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="sal4">Frontend Designer</label>
          <input type="checkbox" name="sal4" id="sal4" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="sal4">WordPress Developer</label>
          <input type="checkbox" name="sal4" id="sal4" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
