import {
    GET_GLOBAL_SUMMARY,
    GET_GLOBAL_SUMMARY_SUCCESS,
    GET_GLOBAL_SUMMARY_FAIL,
    GET_SEARCH_RESULTS,
    GET_SEARCH_RESULTS_SUCCESS,
    GET_SEARCH_RESULTS_FAIL,
    SORT_FROM_LOWEST,
    SORT_FROM_LOWEST_SUCCESS,
    SORT_FROM_LOWEST_FAIL,
    SORT_FROM_HIGHEST,
    SORT_FROM_HIGHEST_SUCCESS,
    SORT_FROM_HIGHEST_FAIL,
  } from "../Types";
  
  import {
    getGlobalSummaryService,
    getSearchByCountryResultsService,
    sortByCountryFromLowestService,
    sortByCountryFromHighestService
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

  export const sortByCountryFromLowestActions = (searchResults, countries) => async (dispatch) => {
    dispatch({
      type: SORT_FROM_LOWEST,
    });
    try {
      const data = await sortByCountryFromLowestService(searchResults, countries);
      dispatch({
        type: SORT_FROM_LOWEST_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: SORT_FROM_LOWEST_FAIL,
        err: "Cannot rank countries!",
      });
    } 
  };

  export const sortByCountryFromHighestActions = (searchResults, countries) => async (dispatch) => {
    dispatch({
      type: SORT_FROM_HIGHEST,
    });
    try {
      const data = await sortByCountryFromHighestService(searchResults, countries);
      dispatch({
        type: SORT_FROM_HIGHEST_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: SORT_FROM_HIGHEST_FAIL,
        err: "Cannot rank countries!",
      });
    } 
  };