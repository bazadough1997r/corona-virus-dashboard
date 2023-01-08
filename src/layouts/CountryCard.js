import { Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getGlobalSummaryActions } from "../store/Actions";
import { useEffect } from "react";

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

  const listCountries =
    searchResults.length !== 0
      ? searchResults.map((country) => (
          <Col>
            <Card key={country.Country} className="text-center">
              <Card.Body>
                <Card.Title>{country?.Country}</Card.Title>
                <Card.Text>Cases: {country?.NewConfirmed}</Card.Text>
                <Card.Text>Recovered: {country?.NewRecovered}</Card.Text>
                <Card.Text>Deaths: {country?.NewDeaths}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))
      : countries.map((country) => (
          <Col>
            <Card key={country.Country} className="text-center">
              <Card.Body>
                <Card.Title>{country?.Country}</Card.Title>
                <Card.Text>Cases: {country?.NewConfirmed}</Card.Text>
                <Card.Text>Recovered: {country?.NewRecovered}</Card.Text>
                <Card.Text>Deaths: {country?.NewDeaths}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))

  return (
    <>
      <Row xs={1} md={6} className="g-4" style={{ margin: "0px" }}>
        {listCountries}
      </Row>
    </>
  );
};
export default CountryCard;
