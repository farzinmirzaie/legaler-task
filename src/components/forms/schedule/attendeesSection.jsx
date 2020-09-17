import React, { useState } from "react";
import MockData from "./mock";

const AttendeesSection = ({ attendees, setAttendees }) => {
  const [keyword, setKeyword] = useState("");

  const AttendeesCard = ({ data }) => (
    <div
      key={data.id}
      className="attendees-container row"
      onClick={() => {
        const temp = [...attendees];
        var i = temp.indexOf(data.id);
        if (i === -1) temp.push(data.id);
        else temp.splice(i, 1);
        setKeyword("");
        setAttendees(temp);
      }}
    >
      <img className="avatar" src={data.avatar} alt="" />
      <div className="column">
        <span className="attendees-name">{data.name}</span>
        <span className="attendees-description">{data.description}</span>
      </div>
    </div>
  );

  const AttendeesList = () => {
    if (!keyword) return null;
    return MockData.filter((attendees) =>
      attendees.name.toLowerCase().includes(keyword.toLowerCase())
    )
      .slice(0, 2)
      .map((attendees) => <AttendeesCard data={attendees} />);
  };

  return (
    <div className="section">
      <div className="row">
        <img
          className="icon"
          src={require("../../../assets/icons/person.png")}
          alt=""
        />
        <span className="section-title">Attendees</span>
      </div>
      <input
        className="options"
        type="text"
        placeholder="Add name or invite by email"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
      />
      <div className="row">
        {MockData.filter((value) => attendees.includes(value.id)).map(
          (value) => (
            <span className="label">{`${value.name}, `}</span>
          )
        )}
      </div>
      <AttendeesList />
    </div>
  );
};

export default AttendeesSection;
