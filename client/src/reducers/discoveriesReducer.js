import _ from "lodash";
import { FETCH_DISCOVERIES, ADD_DISCOVERY } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_DISCOVERIES:
    if (action.payload) {
      return action.payload;
    }
    return state;
  case ADD_DISCOVERY:
    if (action.payload) {
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    }
    break;
  default:
    return state;
  }
}
