import React from "react";

const typeSection = ({
  type,
  setType,
  isPrivate,
  setIsPrivate,
  repeatable,
  setRepeatable,
  repeatCount,
  setRepeatCount,
  repeatType,
  setRepeatType,
  repeatDays,
  setRepeatDays,
}) => {
  const RepeatOptions = () => (
    <>
      <div className="row">
        <span className="label">Repeat Every</span>
        <div style={{ width: 14 }} />
        <select
          className="options"
          value={repeatCount}
          onChange={(event) => setRepeatCount(event.target.value)}
        >
          {[1, 2, 3, 4, 5, 6].map((value) => (
            <option {...{ key: value, value }}>{value}</option>
          ))}
        </select>
        <div style={{ width: 14 }} />
        <select
          className="options"
          value={repeatType}
          onChange={(event) => setRepeatType(event.target.value)}
        >
          {["Day", "Week", "Month", "Year"].map((value) => (
            <option {...{ key: value, value }}>{value}</option>
          ))}
        </select>
      </div>
      <div className="row">
        <span className="label">Repeat On</span>
        <div style={{ width: 14 }} />
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <button
            key={index}
            className={`days ${
              repeatDays.includes(index) ? "days-active" : ""
            }`}
            onClick={() => {
              const temp = [...repeatDays];
              var i = temp.indexOf(index);
              if (i === -1) temp.push(index);
              else temp.splice(i, 1);
              setRepeatDays(temp);
            }}
          >
            {day}
          </button>
        ))}
      </div>
    </>
  );

  return (
    <div className="section">
      <div className="row">
        <img
          className="icon"
          src={require("../../../assets/icons/calendar.png")}
          alt=""
        />
        <span className="section-title">Meeting Type</span>
      </div>
      <div className="row">
        <select
          className="options"
          value={type}
          onChange={(event) => setType(event.target.value)}
        >
          {["Legaler Meeting", "Other Meeting"].map((value) => (
            <option {...{ key: value, value }}>{value}</option>
          ))}
        </select>
        <div style={{ width: 14 }} />
        <select
          className="options"
          value={isPrivate ? "Private" : "Public"}
          onChange={(event) =>
            setIsPrivate(event.target.value === "Private" ? true : false)
          }
        >
          {["Private", "Public"].map((value) => (
            <option {...{ key: value, value }}>{value}</option>
          ))}
        </select>
      </div>
      <select
        className="options"
        value={repeatable ? "Repeats" : "Do not repeats"}
        onChange={(event) =>
          setRepeatable(event.target.value === "Repeats" ? true : false)
        }
      >
        {["Repeats", "Do not repeats"].map((value) => (
          <option {...{ key: value, value }}>{value}</option>
        ))}
      </select>
      {repeatable && <RepeatOptions />}
    </div>
  );
};

export default typeSection;
