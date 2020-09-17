import React from "react";

const TimesSection = ({ submitForm }) => (
  <div className="section">
    <div className="row">
      <img
        className="icon"
        src={require("../../../assets/icons/clock.png")}
        alt=""
      />
      <span className="section-title">Times</span>
    </div>
    <button className="button" onClick={() => submitForm()}>
      + ADD TIME
    </button>
    <span className="hint">Adding more than one time creates a poll</span>
  </div>
);

export default TimesSection;
