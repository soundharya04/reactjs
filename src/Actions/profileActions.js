import axios from "axios";

export const getallProfile = () => dispatch => {
  axios.get("http://localhost:8000/projects/all").then(res => {
    console.log("actions" + res);
    return dispatch({ type: "GET_ALL_PROFILE", profile: res.data });
  });
};
