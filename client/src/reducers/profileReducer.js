import _ from "lodash";
import { FETCH_PROFILE } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_PROFILE:
    if (action.payload) {
      return action.payload;
    }
    return state;
  default:
    return state;
  }
}
