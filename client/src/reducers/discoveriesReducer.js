import _ from "lodash";
import { FETCH_DISCOVERIES, ADD_DISCOVERY } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_DISCOVERIES:
    console.log("PREFETCH: ", state);
    if (action.payload) {
      console.log("POST FETCH: ", action.payload);
      return action.payload;
    }
    return state;
  case ADD_DISCOVERY:
    console.log("pre ADD_DISCOVERY: ", state);
    if (action.payload) {
      console.log("post ADD_DISCOVERY: ", {
        ...state,
        [action.payload.id]: action.payload
      });
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
