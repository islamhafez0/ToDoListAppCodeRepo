import { modesTypes } from "../types";

export const changeMode = (mode) => {
  return {
    type: modesTypes.CHANGE_MODE,
    payload: mode,
  };
};
