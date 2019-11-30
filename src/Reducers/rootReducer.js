const initState = {
  profile: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_ALL_PROFILE":
      return {
        ...state,
        profile: action.profile
      };

    default:
      return state;
  }
};
export default rootReducer;
