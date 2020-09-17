import React from "react";

const Footer = () => (
  <div className="row">
    <span className="label">End Date</span>
    <span className="label">By</span>
    <span className="label">After</span>
    <select className="options">
      {[...Array(20).keys()].map((value) => (
        <option {...{ key: value, value: value + 1 }}>{`${
          value + 1
        } Recurrence`}</option>
      ))}
    </select>
  </div>
);

export default Footer;
