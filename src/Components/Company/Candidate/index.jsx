import React from "react";
import "./Styles.css";

import Resumes from "./Resumes";
import Filter from "./Filter";
import MainList from "./MainList";

const Index = () => {
  return (
    <div className="cadidalist marginframe">
      <div className="row">
        <div className="col-md-3">
          <Resumes />
        </div>
        <div className="col-md-7">
          <MainList />
        </div>
        <div className="col-md-2">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Index;
