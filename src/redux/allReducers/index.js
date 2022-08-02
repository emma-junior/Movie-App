import { combineReducers } from "redux";
import { popularReducer, topratedReducer } from "./reducer";

export default combineReducers({
  popular: popularReducer,
  toprated: topratedReducer,
});
