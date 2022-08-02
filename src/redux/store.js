import { createStore, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./allReducers/index.js";

export const store = createStore(reducer, compose(applyMiddleware(thunk)));
