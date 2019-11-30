import axios from "axios";

export const getallProfile = () => dispatch => {
  axios.get("http://localhost:8000/projects/all").then(res => {
    console.log("actions", res);
    return dispatch({ type: "GET_ALL_PROFILE", profile: res.data });
  });
};

export const getuserProfile = id => dispatch => {
  axios.get("http://localhost:8000/projects/" + id).then(res => {
    return dispatch({ type: "GET_U_PROFILE", profile: res.data });
  });
};

export const addProfile = (prof, history) => {
  axios.post("http://localhost:8000/add", prof).then(res => {
    console.log(res);
    //history.push("/");
  });
};
