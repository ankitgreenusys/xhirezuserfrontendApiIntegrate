import React from "react";
import "./Styles.css";

import LivePreview from "./LivePreview";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import Review from "./Review";
import Submitted from "./Submitted";

const Index = () => {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({});
  const [submited, setSubmited] = React.useState(true);

  return (
    <div className="jbpstcomp marginframe">
      {submited ? (
        step < 5 ? (
          <div className="row">
            <div className="col-md-12 col-lg-7 px-2">
              <div className="atextbox pb-4">
                {step === 1 && <Form1 setData={setData} data={data} />}
                {step === 2 && <Form2 setData={setData} data={data} />}
                {step === 3 && <Form3 setData={setData} data={data} />}
                {step === 4 && <Form4 setData={setData} data={data} />}
                <div className="d-flex justify-content-end align-items-center">
                  {step > 1 && (
                    <span
                      onClick={() => setStep(step - 1)}
                      className="me-4 cursor-pointer"
                    >
                      Back
                    </span>
                  )}
                  <button
                    className="mybtn btn-blue"
                    onClick={() => setStep(step + 1)}
                  >
                    Save and Continue
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-none d-lg-block  px-2">
              <LivePreview />
            </div>
          </div>
        ) : (
          <>
            <Review />
            <div className="confirmSec sticky-bottom d-flex justify-content-center bg-muted py-3">
              <div className="w-75 d-flex justify-content-end ">
                <button
                  className="mybtn btn-blue "
                  onClick={() => setSubmited(false)}
                >
                  Confirm
                </button>
              </div>
            </div>
          </>
        )
      ) : (
        <Submitted />
      )}
    </div>
  );
};

export default Index;
