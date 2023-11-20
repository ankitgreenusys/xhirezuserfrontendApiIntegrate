import React from "react";

const Minor = () => {
  return (
    <div className="minpro mt-5">
      <div className="">
        <label htmlFor="abtus">
          About Us
          <br />
          <span className="txt-blue">How much does Cliffex in India pay?</span>
        </label>
        <textarea
          className="form-control mt-2"
          name="abtus"
          id="abtus"
          rows="12"
        >
          Established in 1994, ATLANTA SYSTEMS PVT. LTD. is India’s fastest
          growing IoT products & solutions company. We render long-term value
          creations for our Industrie-4.0 partners, which ensures global
          acceptance.
        </textarea>
      </div>
    </div>
  );
};

export default Minor;
