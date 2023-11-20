import React from "react";
import "./Styles.css";

import Basic from "./Basic";
import Major from "./Major";
import Minor from "./Minor";

const Index = () => {
  return (
    <div className="Compprofile marginframe">
      <div className="row">
        <div className="col-md-3">
          <Basic />
        </div>
        <div className="col-md-7">
          <Major />
        </div>
        <div className="col-md-2">
          <Minor />
        </div>
      </div>
    </div>
  );
};

export default Index;
