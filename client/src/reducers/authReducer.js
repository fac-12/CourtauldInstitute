import { FETCH_USER, LOGIN_USER, UPDATE_USER } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
  case FETCH_USER:
  case UPDATE_USER:
  case LOGIN_USER:
    if (!action.payload.error) {
      return action.payload;
    }
    return false;
  default:
    return state;
  }
}
