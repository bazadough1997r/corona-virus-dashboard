import { Card, CardGroup } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import {getGlobalSummaryActions} from "../store/Actions"
import { useEffect } from "react";

const HomeCards = () => {

const dispatch = useDispatch();

useEffect(() => {
  dispatch(getGlobalSummaryActions())
}, [dispatch]);

const { totalDeaths, totalRecovered, totalCases } = useSelector(({ globalSummaryReducer }) => ({
  totalDeaths: globalSummaryReducer.totalDeaths,
  totalRecovered: globalSummaryReducer.totalRecovered,
  totalCases: globalSummaryReducer.totalCases
}));

  return (
    <CardGroup>
      <Card
        bg="dark"
        key="dark"
        text="white"
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Body>
          <Card.Title>Cases</Card.Title>
          <Card.Text>{totalCases}</Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="success"
        key="success"
        text="white"
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Body>
          <Card.Title>Recovered</Card.Title>
          <Card.Text>{totalRecovered}</Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="danger"
        key="danger"
        text="white"
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Body>
          <Card.Title>Deaths</Card.Title>
          <Card.Text>{totalDeaths}</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};
export default HomeCards;
