import { SUBMIT_FORM } from "./constants";

const initialState = {
  subject: "",
  project: "",
  attendees: [],
  type: "",
  isPrivate: true,
  repeatable: false,
  repeatCount: 1,
  repeatType: "Week",
  repeatDays: [],
  endDate: new Date(),
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBMIT_FORM:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
};

export default reducer;
