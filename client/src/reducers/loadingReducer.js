import {
  LOADING_UPDATE,
  ADD_UPDATE,
  LOADING_DISCOVERY,
  ADD_DISCOVERY
} from "../actions/types";

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
  case LOADING_DISCOVERY:
    return {
      ...state,
      discoveries: action.payload
    };
  case ADD_DISCOVERY:
    return {
      ...state,
      discoveries: false
    };
  default:
    return state;
  }
}
