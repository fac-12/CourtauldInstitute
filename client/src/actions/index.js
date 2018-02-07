import axios from "axios";

import { FETCH_UPDATES } from "./types";

export const fetchUpdates = (count, skip) => async dispatch => {
  try {
    const updates = await axios.get(`/api/updates?count=${count}&skip=${skip}`);
    console.log("updates: ", updates);
    dispatch({ type: FETCH_UPDATES, payload: updates.data });
  } catch (err) {
    console.log("fetchUpdates: ", err);
  }
};
