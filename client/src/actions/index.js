import axios from "axios";

import {
  FETCH_UPDATES,
  FETCH_DIRECTORY,
  FETCH_PROFILE,
  ADD_UPDATE,
  LOADING_UPDATE,
  FETCH_DISCOVERIES,
  ADD_DISCOVERY,
  LOADING_DISCOVERY,
  FETCH_USER,
  LOGIN_USER,
  LOGOUT_USER,
  UPDATE_USER,
  SET_FILTER,
  PASSWORD_RESET
} from "./types";

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: filter
});

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

export const fetchUser = () => async dispatch => {
  try {
    const userData = await axios.get("/api/profile");
    dispatch({ type: FETCH_USER, payload: userData.data });
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = data => async dispatch => {
  try {
    const userData = await axios.post("/api/login", data);
    dispatch({ type: LOGIN_USER, payload: userData.data });
  } catch (err) {
    console.log(err);
  }
};

export const addUpdate = (data, callback) => async dispatch => {
  try {
    if (data.image_url) {
      callback();
      dispatch({ type: LOADING_UPDATE, payload: true });
      const formData = new FormData();
      formData.append("image", data.image_url);
      const config = {
        headers: {
          Authorization: "Client-ID b981e83d44eafce"
        }
      };
      const imgrData = await axios.post(
        "https://api.imgur.com/3/image",
        formData,
        config
      );
      data.image_url = imgrData.data.data.link;
    } else {
      data.image_url = null;
    }
    const updateData = await axios.post("/api/addUpdate", { ...data });
    dispatch({ type: ADD_UPDATE, payload: updateData.data });
    if (!data.image_url) {
      callback();
    }
  } catch (e) {
    console.log(e);
  }
};

export const fetchDiscoveries = (count, skip) => async dispatch => {
  try {
    const discoveries = await axios.get(
      `/api/discoveries?count=${count}&skip=${skip}`
    );
    dispatch({ type: FETCH_DISCOVERIES, payload: discoveries.data });
  } catch (err) {
    console.log("FETCH_DISCOVERIES: ", err);
  }
};

export const addDiscovery = (data, callback) => async dispatch => {
  try {
    callback();
    dispatch({ type: LOADING_DISCOVERY, payload: true });
    const formData = new FormData();
    formData.append("image", data.image_url);
    const config = {
      headers: {
        Authorization: "Client-ID b981e83d44eafce"
      }
    };
    const imgrData = await axios.post(
      "https://api.imgur.com/3/image",
      formData,
      config
    );
    data.image_url = imgrData.data.data.link;
    const discoveryData = await axios.post("/api/addDiscovery", data);
    dispatch({ type: ADD_DISCOVERY, payload: discoveryData.data });
  } catch (e) {
    console.log(e);
  }
};

export const addNewUser = async data => {
  const formData = new FormData();
  formData.append("image", data.picture_url);
  const config = {
    headers: {
      Authorization: "Client-ID b981e83d44eafce"
    }
  };
  const imgrData = await axios.post(
    "https://api.imgur.com/3/image",
    formData,
    config
  );
  data.picture_url = imgrData.data.data.link;
  const newUserData = await axios.post("api/addNewUser", data);
  console.log("new user added", newUserData);
};

export const resetPassword = (data, callback) => async dispatch => {
  try {
    const resetConfirmed = await axios.post("api/resetPassword", data);
    dispatch({ type: PASSWORD_RESET, payload: resetConfirmed });
    callback();
  } catch (e) {
    console.log(e);
  }
};

export const logoutUser = callback => async dispatch => {
  try {
    const signout = await axios.get("/api/logout");
    dispatch({ type: LOGOUT_USER, payload: signout });
    callback();
  } catch (e) {
    console.log(e);
  }
};

export const updateProgress = async () => {
  try {
    const updateProgressData = await axios.get("/api/googlesheet");
    return updateProgressData.data;
  } catch (err) {
    console.log("update progress: ", err);
  }
};

export const updateProfile = data => async dispatch => {
  try {
    const updatedUser = await axios.put("/api/updateProfile", data);
    dispatch({ type: UPDATE_USER, payload: updatedUser.data });
  } catch (e) {
    console.log(e);
  }
};
