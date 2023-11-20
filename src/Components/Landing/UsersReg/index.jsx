import React from "react";
import "./Styles.css";

import EmailReg from "./EmailReg";
import DetailsReg from "./DetailsReg";
import FullReg from "./FullReg";

const Index = () => {
  const [verify, setVerify] = React.useState(false);
  const [details, setDetails] = React.useState(false);

  return (
    <div className="userreg">
      {verify ? (
        details ? (
          <FullReg />
        ) : (
          <DetailsReg setDetails={setDetails} />
        )
      ) : (
        <EmailReg setVerify={setVerify} />
      )}
    </div>
  );
};

export default Index;
