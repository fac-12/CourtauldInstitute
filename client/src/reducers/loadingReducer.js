import { LOADING_UPDATE, ADD_UPDATE } from "../actions/types";

export default function(
  state = { updates: false, discoveries: false },
  action
) {
  switch (action.type) {
  case LOADING_UPDATE:
    return {
      ...state,
      updates: action.payload
    };
  case ADD_UPDATE:
    return {
      ...state,
      updates: false
    };
  default:
    return state;
  }
}
