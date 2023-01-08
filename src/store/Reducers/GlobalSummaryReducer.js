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

const initialState = {
  totalDeaths: "",
  totalRecovered: "",
  totalCases: "",
  countries: [],
  searchResults: [],
  loading: false,
  err: "",
};

export default function globalSummaryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GLOBAL_SUMMARY:
      return {
        ...state,
        loading: true,
      };
    case GET_GLOBAL_SUMMARY_SUCCESS:
      return {
        ...state,
        loading: false,
        totalDeaths: action?.payload?.Global?.TotalDeaths,
        totalRecovered: action?.payload?.Global?.TotalRecovered,
        totalCases: action?.payload?.Global?.TotalConfirmed,
        countries: action?.payload?.Countries,
      };
    case GET_GLOBAL_SUMMARY_FAIL:
      return {
        ...state,
        loading: false,
        err: action.err,
      };

    case GET_SEARCH_RESULTS:
      return {
        ...state,
        loading: true,
      };
    case GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResults: action?.payload,
        countries: action?.payload?.Countries,
      };
    case GET_SEARCH_RESULTS_FAIL:
      return {
        ...state,
        loading: false,
        err: action.err,
      };

    case SORT_FROM_LOWEST:
      return {
        ...state,
        loading: true,
      };
    case SORT_FROM_LOWEST_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResults: action?.payload,
        countries: action?.payload?.Countries,
      };
    case SORT_FROM_LOWEST_FAIL:
      return {
        ...state,
        loading: false,
        err: action.err,
      };

    case SORT_FROM_HIGHEST:
      return {
        ...state,
        loading: true,
      };
    case SORT_FROM_HIGHEST_SUCCESS:
      return {
        ...state,
        loading: false,
        searchResults: action?.payload,
        countries: action?.payload?.Countries,
      };
    case SORT_FROM_HIGHEST_FAIL:
      return {
        ...state,
        loading: false,
        err: action.err,
      };

    default:
      return state;
  }
}
