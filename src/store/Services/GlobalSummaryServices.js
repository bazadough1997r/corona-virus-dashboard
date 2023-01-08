import API from "./APIs";

export const getGlobalSummaryService = () => {
  return API.get(`/summary`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const getSearchByCountryResultsService = (query) => {
  return API.get(`/country/${query}`)
    .then((data) => {
      console.log(data);
      return data?.data || [];
    })
    .catch((err) => {
      return err;
    });
};