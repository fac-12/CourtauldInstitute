import _ from "lodash";
import { FETCH_DISCOVERIES } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_DISCOVERIES:
    if (action.payload) {
      return action.payload;
    }
    return state;
  default:
    return state;
  }
}
