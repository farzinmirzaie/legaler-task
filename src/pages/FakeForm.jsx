import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../redux";
import { ScheduleForm } from "../components";
import "./FakeForm.css";

const FakeForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <ScheduleForm onSubmit={(data) => dispatch(actions.submit(data))} />
    </div>
  );
};

export default FakeForm;
