import * as actionTypes from "./actionTypes";

export const searchJob = () => {
  return {
    type: actionTypes.INIT_JOB_SEARCH,
  };
};
export const finishSearch = (results) => {
  return {
    type: actionTypes.FINISH_SEARCHING_JOBS,
    searchResults: results,
  };
};
