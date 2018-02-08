import { combineReducers } from "redux";
import updatesReducer from "./updatesReducer";
import directoryReducer from "./directoryReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  updates: updatesReducer,
  directory: directoryReducer,
  profile: profileReducer
});

export default rootReducer;
