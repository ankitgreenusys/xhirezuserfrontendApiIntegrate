import React from "react";
import "./Styles.css";

import SavedJobs from "./SavedJobs";
import AppliedJobs from "./AppliedJobs";
import Interveiw from "./Interveiw";

const Index = () => {
  const [tab, setTab] = React.useState(1);

  return (
    <div className="jobsMy">
      <div className="jobstabs">
        <div className={`jobstab ${tab === 1}`}>
          <div className="jobstabtext" onClick={() => setTab(1)}>
            Saved Jobs
          </div>
        </div>
        <div className={`jobstab ${tab === 2}`}>
          <div className="jobstabtext" onClick={() => setTab(2)}>
            Applied Jobs
          </div>
        </div>
        <div className={`jobstab ${tab === 3}`}>
          <div className="jobstabtext" onClick={() => setTab(3)}>
            Interviews
          </div>
        </div>
      </div>
      <div className="jobsMyContent">
        {tab === 1 && <SavedJobs />}
        {tab === 2 && <AppliedJobs />}
        {tab === 3 && <Interveiw />}
      </div>
    </div>
  );
};

export default Index;
