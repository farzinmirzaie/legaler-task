import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Footer = ({
  endType,
  setEndType,
  date,
  setDate,
  recurrenceCount,
  setRecurrenceCount,
}) => (
  <div className="row">
    <span className="label">End Date</span>

    <input
      className="radio"
      type="radio"
      id="by"
      name="gender"
      value="by"
      onChange={() => setEndType("by")}
      checked={endType === "by"}
    />
    <label className="label" for="by">
      By
    </label>
    <ReactDatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      className="calendar-input"
    />

    <input
      className="radio"
      type="radio"
      id="after"
      name="gender"
      value="after"
      onChange={() => setEndType("after")}
      checked={endType === "after"}
    />
    <label className="label" for="after">
      After
    </label>
    <div style={{ width: 14 }} />
    <select
      className="options"
      value={recurrenceCount}
      onChange={(event) => setRecurrenceCount(event.target.value)}
    >
      {[...Array(20).keys()].map((value) => (
        <option {...{ key: value, value: value + 1 }}>{`${
          value + 1
        } Recurrence`}</option>
      ))}
    </select>
  </div>
);

export default Footer;
