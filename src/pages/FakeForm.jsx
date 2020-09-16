import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../redux";
import "./FakeForm.css";

const FakeForm = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  return <div className="container">{JSON.stringify(store)}</div>;
};

export default FakeForm;
