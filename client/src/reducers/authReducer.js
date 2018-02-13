import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
  case FETCH_USER:
    if (action.payload) {
      return action.payload;
    }
    return false;
  default:
    return state;
  }
}
