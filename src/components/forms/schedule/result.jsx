import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const result = useSelector((store) => store.result);
  if (!result) return null;
  return (
    <textarea className="preview">{JSON.stringify({ result }, "", 2)}</textarea>
  );
};

export default Result;
