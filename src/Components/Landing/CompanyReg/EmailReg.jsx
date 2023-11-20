import React from "react";
import "./Styles.css";

const EmailReg = (props) => {
  const [optsend, setOptsend] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [otp, setOtp] = React.useState("");
  const [otpverify, setOtpverify] = React.useState(false);

  return (
    <div>
      <div className="emailreg d-flex justify-content-center align-items-center h-100 my-5">
        <div className="">
          <h3 className="heading text-center">Enter your email to continue</h3>
          <div className="">
            <div className="atextbox mainbox">
              <div className="">
                <h2>Email address</h2>
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className={`mybtn btn-${optsend ? "muted" : "blue"}`}
                  onClick={() => setOptsend(true)}
                  disabled={optsend}
                >
                  Send Verification Code
                </button>
              </div>
              {optsend && (
                <div className="mt-2">
                  <p className="txt-muted">verification code sent to {email}</p>
                  <h2>Enter Verification Code</h2>
                  <input
                    type="text"
                    placeholder="Enter your Code"
                    className="form-control"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <button
                    className={`mybtn btn-${otpverify ? "muted" : "blue"}`}
                    onClick={() => setOtpverify(true)}
                    disabled={otpverify}
                  >
                    Verify and Continue
                  </button>
                </div>
              )}
              {otpverify && (
                <div className="mt-3">
                  <button
                    onClick={() => props.setVerify(true)}
                    className="mybtn btn-blue"
                  >
                    Continue to registration
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailReg;
