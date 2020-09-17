import React, { useState } from "react";
import Footer from "./footer";
import AttendeesSection from "./attendeesSection";
import TypeSection from "./typeSection";
import TimesSection from "./timesSection";
import Result from "./result";
import "./style.css";

const ScheduleForm = ({ onSubmit = () => null }) => {
  const [subject, setSubject] = useState("");
  const [project, setProject] = useState("");
  const [attendees, setAttendees] = useState([]);
  const [type, setType] = useState("Legaler Meeting");
  const [isPrivate, setIsPrivate] = useState(true);
  const [repeatable, setRepeatable] = useState(true);
  const [repeatCount, setRepeatCount] = useState(1);
  const [repeatType, setRepeatType] = useState("Week");
  const [repeatDays, setRepeatDays] = useState([]);
  const [endType, setEndType] = useState("by");
  const [date, setDate] = useState(new Date());
  const [recurrenceCount, setRecurrenceCount] = useState(1);

  const submitForm = () => {
    const data = {
      subject,
      project,
      attendees,
      type,
      isPrivate,
      repeatable,
      ...(repeatable && { repeatCount, repeatType, repeatDays }),
      ...(endType === "by" ? { date } : { recurrenceCount }),
    };
    validate(data) && onSubmit(data);
  };

  const validate = (data) => {
    let message;
    if (repeatable && repeatDays.length === 0)
      message = "Select at least a day to repeat!";
    if (data.attendees.length === 0)
      message = "You shoud add at least one attendee!";
    if (!data.project) message = "Project can't be empty!";
    if (!data.subject) message = "Subject can't be empty!";
    if (!message) return true;
    alert(message);
    return false;
  };

  return (
    <div className="form-container">
      <span className="title">Schedule Meeting</span>
      <div className="row">
        <div className="column">
          <input
            className="input"
            type="text"
            placeholder="Add Meeting Subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
          <AttendeesSection
            {...{
              attendees,
              setAttendees,
            }}
          />
          <TypeSection
            {...{
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
            }}
          />
        </div>
        <div style={{ width: 14 }} />
        <div className="column">
          <input
            className="input"
            type="text"
            placeholder="Add to Project"
            value={project}
            onChange={(event) => setProject(event.target.value)}
          />
          <TimesSection {...{ submitForm }} />
          <Result />
        </div>
      </div>
      <Footer
        {...{
          endType,
          setEndType,
          date,
          setDate,
          recurrenceCount,
          setRecurrenceCount,
        }}
      />
    </div>
  );
};

export default ScheduleForm;
