import { Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getGlobalSummaryActions } from "../store/Actions";
import { useEffect } from "react";
import SearchForm from "../forms/SearchForm";

export const CountryCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGlobalSummaryActions());
  }, [dispatch]);

  const { countries } = useSelector(({ globalSummaryReducer }) => ({
    countries: globalSummaryReducer.countries,
  }));

  const listCountries = countries === [] ? <>Loading</> : countries.map((country) => (
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
  ));
  return (
    <>
    <SearchForm countries={countries}/>
    <Row xs={1} md={6} className="g-4" style={{ margin: "0px" }}>
      {listCountries}
    </Row>
    </>

  );
};
export default CountryCard;
