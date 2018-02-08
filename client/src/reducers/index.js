import { combineReducers } from "redux";
import updatesReducer from "./updatesReducer";
import directoryReducer from "./directoryReducer";

const rootReducer = combineReducers({
  updates: updatesReducer,
  directory: directoryReducer
});

export default rootReducer;
