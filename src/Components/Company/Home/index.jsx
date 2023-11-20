import React from "react";
import "./Styles.css";

import Profile from "./Profile";
import Jobs from "./Jobs";
import Filter from "./Filter";

const Index = () => {
  return (
    <div className="compdash marginframe">
      <div className="row">
        <div className="col-md-3">
          <Profile />
        </div>
        <div className="col-md-7">
          <Jobs />
        </div>
        <div className="col-md-2">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Index;
