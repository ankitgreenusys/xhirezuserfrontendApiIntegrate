import React from "react";

const Filter = () => {
  return (
    <div className="jobfilter mt-3">
      <div className="atextbox w-100 d-flex justify-content-between">
        <div className="">Job Filter</div>
        <div className="">clear all</div>
      </div>
      <div className="atextbox filtype">
        <div className="txt-blue filtitle">Sort by</div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="PostDate">Posting Date</label>
          <input type="checkbox" name="PostDate" id="PostDate" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="JobTitle">Job Title</label>
          <input type="checkbox" name="JobTitle" id="JobTitle" />
        </div>
      </div>
      <div className="atextbox filtype">
        <div className="txt-blue filtitle">Order</div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="Asc">Ascending</label>
          <input type="checkbox" name="exp0" id="exp0" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="Desc">Descending</label>
          <input type="checkbox" name="Desc" id="Desc" />
        </div>
      </div>
      <div className="atextbox filtype">
        <div className="txt-blue filtitle">Job status</div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="locall">Open</label>
          <input type="checkbox" name="locall" id="locall" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="loc1">Closed</label>
          <input type="checkbox" name="loc1" id="loc1" />
        </div>
        <div className="d-flex justify-content-between opselect my-1 cursor-pointer">
          <label htmlFor="loc2">Gurgoan</label>
          <input type="checkbox" name="loc2" id="loc2" />
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
