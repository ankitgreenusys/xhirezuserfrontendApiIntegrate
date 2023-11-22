import { useState } from "react";
import api from "../../../utils/api";

const EmailReg = ({ userId, setUserId, setVerify }) => {
  const [optsend, setOptsend] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpverify, setOtpverify] = useState(false);

  const sendVerificationCode = async () => {
    try {
      const { data } = await api.post("/employee/signup", {
        email,
      });
      console.log(data);
      setUserId(data?.newUser?._id);
      setOptsend(true);
    } catch (err) {
      console.log(err);
    }
  };
  const verifyCode = async () => {
    try {
      const { data } = await api.post(`/employee/verifyotp/${userId}`, {
        otp: +otp,
      });
      console.log(data);
      setOtpverify(true);
    } catch (err) {
      console.log(err);
    }
  };

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
                  onClick={sendVerificationCode}
                  disabled={optsend}
                >
                  Send Verification Code
                </button>
              </div>
              {optsend && (
                <div className="mt-2">
                  <p className="txt-muted">Verification code sent to {email}</p>
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
                    onClick={verifyCode}
                    disabled={otpverify}
                  >
                    Verify and Continue
                  </button>
                </div>
              )}
              {otpverify && (
                <div className="mt-3">
                  <button
                    onClick={() => setVerify(true)}
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
