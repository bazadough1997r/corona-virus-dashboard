import API from "./APIs";

export const getGlobalSummaryService = () => {
  return API.get(`/summary`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const getSearchByCountryResultsService = (query) => {
  return API.get(`/summary`)
    .then((res) => {
      const results = res?.data?.Countries.filter((country) =>country?.Slug.includes(query));
      return results;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
