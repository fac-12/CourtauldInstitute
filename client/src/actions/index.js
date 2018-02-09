import axios from "axios";

import { FETCH_UPDATES, FETCH_DIRECTORY, FETCH_PROFILE } from "./types";

export const fetchUpdates = (count, skip) => async dispatch => {
  try {
    const updates = await axios.get(`/api/updates?count=${count}&skip=${skip}`);
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

export const fetchProfile = profileId => async dispatch => {
  try {
    const profile = await axios.get(`/api/profile?id=${profileId}`);
    dispatch({ type: FETCH_PROFILE, payload: profile.data });
  } catch (err) {
    console.log("fetchProfile: ", err);
  }
};
