import React from "react";
import "./Styles.css";

import EmailReg from "./EmailReg";
import DetailsReg from "./DetailsReg";

const Index = () => {
  const [verify, setVerify] = React.useState(false);

  return (
    <div className="companyreg">
      {verify ? <DetailsReg /> : <EmailReg setVerify={setVerify} />}
    </div>
  );
};

export default Index;
