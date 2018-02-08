import _ from "lodash";
import { FETCH_DIRECTORY } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_DIRECTORY:
    if (action.payload) {
      return _.mapKeys(action.payload, "id");
    }
    return state;
  default:
    return state;
  }
}
