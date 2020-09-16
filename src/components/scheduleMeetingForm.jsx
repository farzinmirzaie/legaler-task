import React from "react";
import "./scheduleMeetingForm.css";

const AttendeesSection = ({ values }) => (
  <div className="section">
    <div className="row">
      <img
        className="icon"
        src={require("../assets/icons/person.png")}
        alt=""
      />
      <span className="section-title">Attendees</span>
    </div>
    <input
      className="options"
      type="text"
      placeholder="Add name or invite by email"
    />
    {/* <div>autocomplete</div> */}
  </div>
);

const MeetingTypeSection = ({ values }) => (
  <div className="section">
    <div className="row">
      <img
        className="icon"
        src={require("../assets/icons/calendar.png")}
        alt=""
      />
      <span className="section-title">Meeting Type</span>
    </div>
    <div className="row">
      <select className="options">
        <option>Legaler Meeting</option>
        <option>Other Meeting</option>
      </select>
      <div style={{ width: 14 }} />
      <select className="options">
        <option>Private</option>
        <option>Public</option>
      </select>
    </div>
    <select className="options">
      <option>Repeats</option>
      <option>Do not repeats</option>
    </select>
    <div className="row">
      <span className="label">Repeat Every</span>
      <div style={{ width: 14 }} />
      <select className="options">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
      </select>
      <div style={{ width: 14 }} />
      <select className="options">
        <option>Day</option>
        <option>Week</option>
        <option>Month</option>
        <option>Year</option>
      </select>
    </div>
    <div className="row">
      <span className="label">Repeat On</span>
      <div style={{ width: 14 }} />
      {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
        <span className="days days-active">{day}</span>
      ))}
    </div>
  </div>
);

const TimesSection = ({ onSubmit = () => null }) => (
  <div className="section">
    <div className="row">
      <img className="icon" src={require("../assets/icons/clock.png")} alt="" />
      <span className="section-title">Times</span>
    </div>
    <button className="button" onClick={() => onSubmit("test")}>
      + ADD TIME
    </button>
    <span className="hint">Adding more than one time creates a poll</span>
  </div>
);

const Footer = ({ values }) => (
  <div className="row">
    <span className="label">End Date</span>
    <span className="label">By</span>
    <span className="label">After</span>
    <select className="options">
      <option>1 Recurrence</option>
      <option>2 Recurrence</option>
      <option>3 Recurrence</option>
      <option>4 Recurrence</option>
      <option>5 Recurrence</option>
      <option>6 Recurrence</option>
    </select>
  </div>
);

const ScheduleMeetingForm = ({ values, result, onSubmit }) => {
  return (
    <div className="form-container">
      <span className="title">Schedule Meeting</span>
      <div className="row">
        <div className="column">
          <input
            className="input"
            type="text"
            placeholder="Add Meeting Subject"
          />
          <AttendeesSection {...values} />
          <MeetingTypeSection {...values} />
        </div>
        <div style={{ width: 14 }} />
        <div className="column">
          <input className="input" type="text" placeholder="Add to Project" />
          <TimesSection {...onSubmit} />
          {result && (
            <textarea className="preview">
              {JSON.stringify({ result }, "", 2)}
            </textarea>
          )}
        </div>
      </div>
      <Footer {...values} />
    </div>
  );
};

export default ScheduleMeetingForm;
