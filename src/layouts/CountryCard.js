import { Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getGlobalSummaryActions,
  getSearchByCountryResultsActions,
  sortByCountryFromHighestActions,
  sortByCountryFromLowestActions,
} from "../store/Actions";
import { useEffect } from "react";
import SearchForm from "../forms/SearchForm";
import { debounce } from "lodash";
import { useMemo } from "react";
import RankCountries from "./RankCountries";

export const CountryCard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGlobalSummaryActions());
  }, [dispatch]);

  const { countries, searchResults } = useSelector(
    ({ globalSummaryReducer }) => ({
      countries: globalSummaryReducer.countries,
      searchResults: globalSummaryReducer.searchResults,
    })
  );

  const debouncedOnChange = useMemo(
    () =>
      debounce(async (q) => {
        dispatch(getSearchByCountryResultsActions(q));
      }, 500),
    [dispatch]
  );

  const changeHandler = (event) => {
    debouncedOnChange(event.target.value);
  };

  const mappingCountries = ({ country }) => (
    <Col>
      <Card key={country.Slug} className="text-center">
        <Card.Body>
          <Card.Title>{country?.Country}</Card.Title>
          <Card.Text>Cases: {country?.TotalConfirmed}</Card.Text>
          <Card.Text>Recovered: {country?.NewRecovered}</Card.Text>
          <Card.Text>Deaths: {country?.NewDeaths}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );

  const listCountries =
    searchResults.length !== 0
      ? searchResults.map((country) => mappingCountries({ country }))
      : countries.map((country) => mappingCountries({ country }));

  const lowestBtnHandler = () => {
    dispatch(sortByCountryFromLowestActions(searchResults, countries));
  };

  const highestBtnHandler = () => {
    dispatch(sortByCountryFromHighestActions(searchResults, countries));
  };

  return (
    <>
      <SearchForm changeHandler={changeHandler} />
      <RankCountries
        highestBtnHandler={highestBtnHandler}
        lowestBtnHandler={lowestBtnHandler}
      />
      <Row xs={1} md={6} className="g-4" style={{ margin: "0px" }}>
        {listCountries}
      </Row>
    </>
  );
};
export default CountryCard;
