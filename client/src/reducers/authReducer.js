import {
  FETCH_USER,
  LOGIN_USER,
  UPDATE_USER,
  LOGOUT_USER,
  PASSWORD_RESET
} from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
  case FETCH_USER:
  case UPDATE_USER:
  case LOGIN_USER:
    if (!action.payload.error) {
      return action.payload;
    }
    return false;
  case PASSWORD_RESET:
    if (action.payload) {
      return { ...state, pw_reset: true };
    }
    return state;
  case LOGOUT_USER:
    if (action.payload) {
      return false;
    }
    return state;
  default:
    return state;
  }
}
