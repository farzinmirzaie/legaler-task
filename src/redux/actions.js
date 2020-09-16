import { SUBMIT_FORM } from "./constants";

const submit = (payload) => {
  return {
    type: SUBMIT_FORM,
    payload,
  };
};

export default {
  submit,
};
