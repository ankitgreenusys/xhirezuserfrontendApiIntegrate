import React from "react";

const Sidebar = () => {
  const [tab, setTab] = React.useState(1);

  return (
    <div className="sidebartab">
      <div className="atextbox catebox">
        <div className="d-flex justify-content-between">
          <div className="">Indox</div>
          <div className="">
            <i class="fa-solid fa-chevron-down txt-blue"></i>
          </div>
        </div>
      </div>
      <div className="msgstabs">
        <div className={`msgstab ${tab === 1}`}>
          <div className="msgstabtext" onClick={() => setTab(1)}>
            All
          </div>
        </div>
        <div className={`msgstab ${tab === 2}`}>
          <div className="msgstabtext" onClick={() => setTab(2)}>
            Read
          </div>
        </div>
        <div className={`msgstab ${tab === 3}`}>
          <div className="msgstabtext" onClick={() => setTab(3)}>
            Unread
          </div>
        </div>
      </div>
      <div className="atextbox msgslist overflowscroll">
        <div className="msgcmp active">
          <div className="msghead d-flex justify-content-between align-items-center">
            <div className="cmpdet">
              <span class="cmpname">Greenusys Technology</span>
              <span class="cmpdate txt-muted">Today</span>
            </div>
            <div className="unreadnu">2</div>
          </div>
          <div className="msgbody">
            <span>It only takes a few seconds</span>
          </div>
        </div>
        <div className="msgcmp">
          <div className="msghead d-flex justify-content-between align-items-center">
            <div className="cmpdet ">
              <span class="cmpname">Greenusys Technology</span>
              <span class="cmpdate txt-muted">Today</span>
            </div>
          </div>
          <div className="msgbody">
            <span>It only takes a few seconds</span>
          </div>
        </div>
        <div className="msgcmp">
          <div className="msghead d-flex justify-content-between align-items-center">
            <div className="cmpdet ">
              <span class="cmpname">Greenusys Technology</span>
              <span class="cmpdate txt-muted">Today</span>
            </div>
          </div>
          <div className="msgbody">
            <span>It only takes a few seconds</span>
          </div>
        </div>
        <div className="msgcmp">
          <div className="msghead d-flex justify-content-between align-items-center">
            <div className="cmpdet ">
              <span class="cmpname">Greenusys Technology</span>
              <span class="cmpdate txt-muted">Today</span>
            </div>
          </div>
          <div className="msgbody">
            <span>It only takes a few seconds</span>
          </div>
        </div>
        <div className="msgcmp">
          <div className="msghead d-flex justify-content-between align-items-center">
            <div className="cmpdet ">
              <span class="cmpname">Greenusys Technology</span>
              <span class="cmpdate txt-muted">Today</span>
            </div>
          </div>
          <div className="msgbody">
            <span>It only takes a few seconds</span>
          </div>
        </div>
        <div className="msgcmp">
          <div className="msghead d-flex justify-content-between align-items-center">
            <div className="cmpdet">
              <span class="cmpname">Greenusys Technology</span>
              <span class="cmpdate txt-muted">Today</span>
            </div>
          </div>
          <div className="msgbody">
            <span>It only takes a few seconds</span>
          </div>
        </div>
        <div className="msgcmp">
          <div className="msghead d-flex justify-content-between align-items-center">
            <div className="cmpdet">
              <span class="cmpname">Greenusys Technology</span>
              <span class="cmpdate txt-muted">Today</span>
            </div>
          </div>
          <div className="msgbody">
            <span>It only takes a few seconds</span>
          </div>
        </div>
        <div className="msgcmp">
          <div className="msghead d-flex justify-content-between align-items-center">
            <div className="cmpdet">
              <span class="cmpname">Greenusys Technology</span>
              <span class="cmpdate txt-muted">Today</span>
            </div>
          </div>
          <div className="msgbody">
            <span>It only takes a few seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
