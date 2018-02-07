import _ from "lodash";
import { FETCH_UPDATES } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_UPDATES:
    if (action.payload) {
      return _.mapKeys(action.payload, "id");
    }
    return state;
  default:
    return state;
  }
}
