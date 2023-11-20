import React from "react";

const Chat = () => {
  return (
    <div className="chatsec">
      <div className="title">Messages</div>
      <div className="msgbox atextbox">
        <div className="msghead">
          <div class="cmpdeg txt-blue">UI/UX Designer</div>
          <div class="cmpname">Greenusys Technology</div>
        </div>
        <div className="divider"></div>
        <div className="chatbody d-flex flex-column-reverse overflowscroll">
          <div className="">
            <div className="singleday">
              <div className="chatdate d-flex justify-content-between align-items-center">
                <div className="dateline flex-grow-1"></div>
                <div className="date">12 Jan, 2023</div>
                <div className="dateline flex-grow-1"></div>
              </div>
              <div className="chatmsgs">
                <div className="msg">
                  <div className="msgdet d-flex align-items-end">
                    <div className="person">You</div>
                    <div className="time">08:26am</div>
                  </div>
                  <div className="msgtxt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, quibusdam.
                  </div>
                </div>
                <div className="msg">
                  <div className="msgdet d-flex align-items-end">
                    <div className="person">Ruben Kenter</div>
                    <div className="time">08:26am</div>
                  </div>
                  <div className="msgtxt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, quibusdam.
                  </div>
                </div>
              </div>
            </div>
            <div className="singleday">
              <div className="chatdate d-flex justify-content-between align-items-center">
                <div className="dateline flex-grow-1"></div>
                <div className="date">12 Jan, 2023</div>
                <div className="dateline flex-grow-1"></div>
              </div>
              <div className="chatmsgs">
                <div className="msg">
                  <div className="msgdet d-flex align-items-end">
                    <div className="person">You</div>
                    <div className="time">08:26am</div>
                  </div>
                  <div className="msgtxt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, quibusdam.
                  </div>
                </div>
                <div className="msg">
                  <div className="msgdet d-flex align-items-end">
                    <div className="person">Ruben Kenter</div>
                    <div className="time">08:26am</div>
                  </div>
                  <div className="msgtxt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, quibusdam. Lorem ipsum dolor sit amet
                  </div>
                </div>
              </div>
            </div>
            <div className="singleday">
              <div className="chatdate d-flex justify-content-between align-items-center">
                <div className="dateline flex-grow-1"></div>
                <div className="date">12 Jan, 2023</div>
                <div className="dateline flex-grow-1"></div>
              </div>
              <div className="chatmsgs">
                <div className="msg">
                  <div className="msgdet d-flex align-items-end">
                    <div className="person">You</div>
                    <div className="time">08:26am</div>
                  </div>
                  <div className="msgtxt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, quibusdam.
                  </div>
                </div>
                <div className="msg">
                  <div className="msgdet d-flex align-items-end">
                    <div className="person">Ruben Kenter</div>
                    <div className="time">08:26am</div>
                  </div>
                  <div className="msgtxt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, quibusdam. Lorem ipsum dolor sit amet
                  </div>
                </div>
              </div>
            </div>
            <div className="singleday">
              <div className="chatdate d-flex justify-content-between align-items-center">
                <div className="dateline flex-grow-1"></div>
                <div className="date">12 Jan, 2023</div>
                <div className="dateline flex-grow-1"></div>
              </div>
              <div className="chatmsgs">
                <div className="msg">
                  <div className="msgdet d-flex align-items-end">
                    <div className="person">You</div>
                    <div className="time">08:26am</div>
                  </div>
                  <div className="msgtxt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, quibusdam.
                  </div>
                </div>
                <div className="msg">
                  <div className="msgdet d-flex align-items-end">
                    <div className="person">Ruben Kenter</div>
                    <div className="time">08:26am</div>
                  </div>
                  <div className="msgtxt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, quibusdam. Lorem ipsum dolor sit amet
                  </div>
                </div>
              </div>
            </div>
            <div className="singleday">
              <div className="chatdate d-flex justify-content-between align-items-center">
                <div className="dateline flex-grow-1"></div>
                <div className="date">12 Jan, 2023</div>
                <div className="dateline flex-grow-1"></div>
              </div>
              <div className="chatmsgs">
                <div className="msg">
                  <div className="msgdet d-flex align-items-end">
                    <div className="person">You</div>
                    <div className="time">08:26am</div>
                  </div>
                  <div className="msgtxt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, quibusdam.
                  </div>
                </div>
                <div className="msg">
                  <div className="msgdet d-flex align-items-end">
                    <div className="person">Ruben Kenter</div>
                    <div className="time">08:26am</div>
                  </div>
                  <div className="msgtxt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus, quibusdam. Lorem ipsum dolor sit amet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="msginput">
          <input type="text" placeholder="Type a message" />
          <button className="mybtn btn-muted">
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
