import { combineReducers } from "redux";

import todosReducers from "./todos/todosReducer";
import modesReducers from "./modes/modesReducers";

const allReducers = combineReducers({
  todosState: todosReducers,
  modesState: modesReducers,
});

export default allReducers;
