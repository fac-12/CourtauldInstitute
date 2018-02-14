import { LOGIN_USER } from "../actions/types";

export default function(state = { login: false }, action) {
  switch (action.type) {
  case LOGIN_USER:
    if (action.payload.error) {
      return {
        ...state,
        login: action.payload.error
      };
    }
    return {
      ...state,
      login: false
    };
  default:
    return state;
  }
}
