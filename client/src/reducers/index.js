import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import updatesReducer from "./updatesReducer";
import directoryReducer from "./directoryReducer";
import profileReducer from "./profileReducer";
import authReducer from "./authReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  updates: updatesReducer,
  directory: directoryReducer,
  profile: profileReducer,
  form: formReducer,
  auth: authReducer,
  loading: loadingReducer
});

export default rootReducer;
