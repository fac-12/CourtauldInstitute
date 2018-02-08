import { combineReducers } from "redux";
import updatesReducer from "./updatesReducer";

const rootReducer = combineReducers({
  updates: updatesReducer
});

export default rootReducer;
