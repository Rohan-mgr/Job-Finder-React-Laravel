import * as actionTypes from "../action/actionTypes";

const initialState = {
  searchedJob: [],
};

// const searchJob = (state) => {
//   return {
//     ...state,
//     isEditing: true,
//   };
// };
const finishSearch = (state, action) => {
  return {
    ...state,
    searchedJob: action.searchResults,
  };
};

const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FINISH_SEARCHING_JOBS:
      return finishSearch(state, action);
    default:
      return state;
  }
};

export default companyReducer;
