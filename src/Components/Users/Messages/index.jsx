import React from "react";
import "./Styles.css";

import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Company from "./Company";

const Index = () => {
  return (
    <div className="messagesec marginframe">
      <div className="row">
        <div className="col-md-3 px-2">
          <Sidebar />
        </div>
        <div className="col-md-6 px-2">
          <Chat />
        </div>
        <div className="col-md-3 px-2">
          <Company />
        </div>
      </div>
    </div>
  );
};

export default Index;
