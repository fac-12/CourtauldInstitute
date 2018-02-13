import { FETCH_USER } from "../actions/types";

const dummyState = {
  id: 1,
  first_name: "Shannon",
  last_name: "Wedgwood",
  email: "jem@gmail.com",
  type: "staff"
};

export default function(state = dummyState, action) {
  switch (action.type) {
  case FETCH_USER:
    if (!action.payload.error) {
      return action.payload;
    }
    return false;
  default:
    return state;
  }
}
