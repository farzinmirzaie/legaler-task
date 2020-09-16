import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux";
import { ScheduleMeetingForm } from "../components";
import "./FakeForm.css";

const FakeForm = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  return (
    <div className="container">
      <ScheduleMeetingForm
        result={store}
        // values={store}
        // onSubmit={(data) => dispatch(actions.submit(data))}
      />
    </div>
  );
};

export default FakeForm;
