const initState = {
<<<<<<< HEAD
  profile: "",
  u_profile: "",
  responses: ""
=======
  profile: [],
  u_profile: [],
  responses: null
>>>>>>> 92b29da1dfd25d251c64b339a5294c378e0c40ed
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_PROFILE":
      return {
        ...state,
        profile: action.profile
      };

    case "GET_U_PROFILE":
      return {
        ...state,
        u_profile: action.profile
      };
    case "RESPONSE":
      return {
        ...state,
        responses: action.profile
      };

    case "RESPONSE":
      return {
        ...state,
        responses: action.profile
      };

    case "DELETE_PROFILE":
      return state;

    case "addProfile":
      return state;

    case "EDIT_PROFILE":
      return state;

    default:
      return state;
  }
};
export default rootReducer;
