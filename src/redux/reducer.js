import { SUBMIT_FORM } from "./constants";

const initialState = {
  result: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBMIT_FORM:
      return { ...state, result: payload };
    default:
      return state;
  }
};

export default reducer;
