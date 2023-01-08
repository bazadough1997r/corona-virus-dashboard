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
      const results = res?.data?.Countries.filter((country) =>
        country?.Slug.includes(query)
      );
      return results;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const sortByCountryFromLowestService = (searchResults, countries) => {
  return API.get(`/summary`)
    .then((res) => {
      let sortedResults =
        searchResults.length !== 0
          ? searchResults.sort(
              (c1, c2) => c1.TotalConfirmed - c2.TotalConfirmed
            )
          : countries.sort((c1, c2) => c1.TotalConfirmed - c2.TotalConfirmed);
      return sortedResults;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const sortByCountryFromHighestService = (searchResults, countries) => {
  return API.get(`/summary`)
    .then((res) => {
      let sortedResults =
        searchResults.length === 0
          ? countries.sort((c1, c2) => c2.TotalConfirmed - c1.TotalConfirmed)
          : searchResults.sort(
              (c1, c2) => c2.TotalConfirmed - c1.TotalConfirmed
            );
      return sortedResults;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
