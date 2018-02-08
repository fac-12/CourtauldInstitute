import axios from "axios";

import { FETCH_UPDATES, FETCH_DIRECTORY } from "./types";

export const fetchUpdates = (count, skip) => async dispatch => {
  try {
    const updates = await axios.get(`/api/updates?count=${count}&skip=${skip}`);
    console.log("updates: ", updates);
    dispatch({ type: FETCH_UPDATES, payload: updates.data });
  } catch (err) {
    console.log("fetchUpdates: ", err);
  }
};

export const fetchDirectory = () => async dispatch => {
  try {
    const directory = await axios.get(`/api/directory`);
    dispatch({ type: FETCH_DIRECTORY, payload: directory.data });
  } catch (err) {
    console.log("fetchDirectory: ", err);
  }
};
