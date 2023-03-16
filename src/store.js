import { createStore } from "redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(reducer, composeWithDevTools(middleware));
