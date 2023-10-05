import { modesTypes } from "../types";

const initialState = {
  mode: modesTypes.ADD,
};
// mode => add || not-done || edit
const modesReducer = (state = initialState, action) => {
  switch (action.type) {
    case modesTypes.CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default modesReducer;
