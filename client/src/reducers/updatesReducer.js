import _ from "lodash";
import { FETCH_UPDATES, ADD_UPDATE } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_UPDATES:
    if (action.payload) {
      return _.mapKeys(action.payload, "id");
    }
    return state;
  case ADD_UPDATE:
    return {
      ...state,
      [action.payload.id]: action.payload
    };
  default:
    return state;
  }
}
