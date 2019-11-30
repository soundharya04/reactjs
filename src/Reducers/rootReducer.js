const initState = {
  profile: [],
  u_profile: [],
  responses: null
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

    case "addProfile":
      return state;

    default:
      return state;
  }
};
export default rootReducer;
