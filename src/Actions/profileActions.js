import axios from "axios";

export const getallProfile = () => dispatch => {
  axios.get("http://localhost:8000/projects/all").then(res => {
    return dispatch({ type: "GET_ALL_PROFILE", profile: res.data });
  });
};

export const getuserProfile = id => dispatch => {
  axios.get("http://localhost:8000/projects/" + id).then(res => {
    return dispatch({ type: "GET_U_PROFILE", profile: res.data });
  });
};

export const addProfile = (prof, history) => dispatch => {
  axios
    .post("http://localhost:8000/add", {
      name: prof.name,
      desc: prof.desc,
      completed: prof.completed
    })
    .then(res => {
      history.push("/");
      return dispatch({ type: "RESPONSE", profile: res.data });
    })
<<<<<<< HEAD
    .catch(err => {
      console.log(err);
    });
};

export const deleteProfile = (id, history) => dispatch => {
  axios
    .delete("http://localhost:8000/delete/" + id)
    .then(res => {
      history.push("/");
      return dispatch({ type: "DELETE_PROFILE", profile: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const editProfile = (prof, history) => dispatch => {
  axios
    .post("http://localhost:8000/update", prof)
    .then(res => {
      history.push("/");
      return dispatch({ type: "EDIT_PROFILE", profile: res.data });
    })
    .catch(err => {
      console.log(err);
    });
=======
    .catch(err => console.log(err));
>>>>>>> 92b29da1dfd25d251c64b339a5294c378e0c40ed
};
