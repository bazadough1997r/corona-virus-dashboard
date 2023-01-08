import {
    GET_GLOBAL_SUMMARY,
    GET_GLOBAL_SUMMARY_SUCCESS,
    GET_GLOBAL_SUMMARY_FAIL,
    GET_SEARCH_RESULTS,
    GET_SEARCH_RESULTS_SUCCESS,
    GET_SEARCH_RESULTS_FAIL,
  } from "../Types";
  
  import {
    getGlobalSummaryService,
    getSearchByCountryResultsService,
  } from "../Services";
  
  export const getGlobalSummaryActions = () => async (dispatch) => {
    dispatch({
      type: GET_GLOBAL_SUMMARY,
    });
    try {
      const data = await getGlobalSummaryService();
      dispatch({
        type: GET_GLOBAL_SUMMARY_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: GET_GLOBAL_SUMMARY_FAIL,
        err: "Cannot fetch global summary!",
      });
    } 
  };

  export const getSearchByCountryResultsActions = (query) => async (dispatch) => {
    dispatch({
      type: GET_SEARCH_RESULTS,
    });
    try {
      const data = await getSearchByCountryResultsService(query.toLowerCase());
      dispatch({
        type: GET_SEARCH_RESULTS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: GET_SEARCH_RESULTS_FAIL,
        err: "Cannot fetch search results!",
      });
    } 
  };