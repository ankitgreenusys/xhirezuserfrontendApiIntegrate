import { useState } from "react";
import "./Styles.css";

import EmailReg from "./EmailReg";
import DetailsReg from "./DetailsReg";
import FullReg from "./FullReg";

const Index = () => {
  const [verify, setVerify] = useState(false);
  const [details, setDetails] = useState(false);
  const [userId, setUserId] = useState(null);

  return (
    <div className="userreg">
      {verify ? (
        details ? (
          <FullReg userId={userId} />
        ) : (
          <DetailsReg setDetails={setDetails} userId={userId} />
        )
      ) : (
        <EmailReg setVerify={setVerify} userId={userId} setUserId={setUserId} />
      )}
    </div>
  );
};

export default Index;
