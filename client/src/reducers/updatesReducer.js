import _ from "lodash";
import { FETCH_UPDATES, ADD_UPDATE } from "../actions/types";

export default function(state = { data: {}, isMore: true }, action) {
  switch (action.type) {
  case FETCH_UPDATES:
    if (action.payload) {
      const newUpdates = _.mapKeys(action.payload, "id");
      return {
        data: {
          ...state.data,
          ...newUpdates
        },
        isMore:
            _.size({
              ...state.data,
              ...newUpdates
            }) > _.size(state.data)
      };
    }
    return state;
  case ADD_UPDATE:
    return {
      data: {
        ...state.data,
        [action.payload.id]: action.payload
      }
    };
  default:
    return state;
  }
}
